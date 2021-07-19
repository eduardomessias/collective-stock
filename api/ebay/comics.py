# import datetime
# import json
from dotenv import load_dotenv
from ebaysdk.exception import ConnectionError
from ebaysdk.finding import Connection as Finding
from http.server import BaseHTTPRequestHandler


class handler(BaseHTTPRequestHandler):
    def get_results(self,payload):
        import os
        try:
            load_dotenv()
            APP_ID = os.environ.get("EBAY_APPID")
            api = Finding(siteid='EBAY-GB',appid=APP_ID,config_file=None)
            response = api.execute('findItemsAdvanced', payload)
            return response.dict()
        except ConnectionError as e:
            self.send_response(500)
            self.send_header('Content-type', 'text/plain')
            self.end_headers()
            self.wfile.write(str(e).encode())


    def get_total_pages(self,results):
        if results:
            return int(results.get('paginationOutput').get('totalPages'))
        else:
            return


    def search_ebay(self,payload):
        import pandas as pd
        results = self.get_results(payload)
        #pages_count = self.get_total_pages(results)
        item_list = results['searchResult']['item']
        #page_number = 2
        #while (page_number <= pages_count):
        #   payload['paginationInput'] = {'entriesPerPage':100,'pageNumber':page_number}
        #   results = get_results(payload)
        #   page_number += 1
        df_items = pd.DataFrame(columns=['itemId','title','viewItemURL','galleryURL','location','postalCode','paymenthMethod','listingType','bestOfferEnabled','buyItNowAvailable','currentPrice','bidCount','sellingState'])
        for item in item_list:
            row = {
                'itemId': item.get('itemId'),
                'title': item.get('title'),
                'viewItemURL': item.get('viewItemURL'),
                'galleryURL': item.get('galleryURL'),
                'location': item.get('location'),
                'postalCode': item.get('postalCode'),
                'paymentMethod': item.get('paymentMethod'),
                'listingType': item.get('listingInfo').get('listingType'),
                'bestOfferEnabled': item.get('bestOfferEnabled'),
                'buyItNowAvailable': item.get('buyItNowAvailable'),
                'currentPrice': item.get('sellingStatus').get('currentPrice').get('value'),
                'bidCount': item.get('bidCount'),
                'sellingState': item.get('sellingState'),
            }
            df_items = df_items.append(row,ignore_index=True)
        return df_items            


    def do_GET(self):
        payload = {
            'keywords': 'CGC',
            'categoryId': ['259104'],
            'itemFilter': [
                {'name': 'StartTimeNewest'}
            ]
        }
        df_items = self.search_ebay(payload)
        self.send_response(500)
        self.send_header('Content-type', 'text/plain')
        self.end_headers()
        self.wfile.write(str(df_items.to_json()).encode())

    # try:
        
    #     APP_ID = os.environ.get("EBAY_APPID")
    #     DOMAIN = os.environ.get("EBAY_DOMAIN")
    #     ebay = Finding (domain=domain, appid=appid, config_file=None)
    #     response = ebay.execute('findItemsAdvanced', {
    #         'keywords': 'comic+books',
    #         #'categoryId' : ['177', '111422'],
    #         # 'itemFilter': [
    #         #     {'name': 'Condition', 'value': 'Used'},
    #         #     {'name': 'MinPrice', 'value': '200', 'paramName': 'Currency', 'paramValue': 'GBP'},
    #         #     {'name': 'MaxPrice', 'value': '400', 'paramName': 'Currency', 'paramValue': 'GBP'}
    #         # ],
    #         # 'paginationInput': {
    #         #     'entriesPerPage': '25',
    #         #     'pageNumber': '1' 	 
    #         # },
    #         'sortOrder': 'CurrentPriceHighest'
    #     })
    #     if response.reply is not None and response.reply.searchResult is not None:
    #         count = int(response.reply.searchResult._count)

    #         if count > 0:
    #             item_list = response.reply.searchResult.item
    #             self.send_response(500)
    #             self.send_header('Content-type', 'text/plain')
    #             self.end_headers()
    #             self.wfile.write(str([item.title for item in item_list]).encode())
    # except ConnectionError as e:
    #     self.send_response(500)
    #     self.send_header('Content-type', 'text/plain')
    #     self.end_headers()
    #     self.wfile.write(str(e).encode())
