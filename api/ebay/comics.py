from http.server import BaseHTTPRequestHandler


class handler(BaseHTTPRequestHandler):


  def do_GET(self):
    import datetime
    import json
    import os

    from ebaysdk.exception import ConnectionError
    from ebaysdk.finding import Connection as Finding

    from dotenv import load_dotenv


    try:
        load_dotenv()
        appid = os.environ.get("EBAY_APPID")
        domain = os.environ.get("EBAY_DOMAIN")
        ebay = Finding (domain=domain, appid=appid, config_file=None)
        response = ebay.execute('findItemsAdvanced', {
            'keywords': 'comic+books',
            #'categoryId' : ['177', '111422'],
            # 'itemFilter': [
            #     {'name': 'Condition', 'value': 'Used'},
            #     {'name': 'MinPrice', 'value': '200', 'paramName': 'Currency', 'paramValue': 'GBP'},
            #     {'name': 'MaxPrice', 'value': '400', 'paramName': 'Currency', 'paramValue': 'GBP'}
            # ],
            # 'paginationInput': {
            #     'entriesPerPage': '25',
            #     'pageNumber': '1' 	 
            # },
            'sortOrder': 'CurrentPriceHighest'
        })
        if response.reply is not None and response.reply.searchResult is not None:
            count = int(response.reply.searchResult._count)

            if count > 0:
                item_list = response.reply.searchResult.item
                self.send_response(500)
                self.send_header('Content-type', 'text/plain')
                self.end_headers()
                self.wfile.write(str([item.title for item in item_list]).encode())
    except ConnectionError as e:
        self.send_response(500)
        self.send_header('Content-type', 'text/plain')
        self.end_headers()
        self.wfile.write(str(e).encode())
