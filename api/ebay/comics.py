from http.server import BaseHTTPRequestHandler


class handler(BaseHTTPRequestHandler):
    def get_results(self,payload):
        from os import environ
        from dotenv import load_dotenv
        from ebaysdk.exception import ConnectionError
        from ebaysdk.finding import Connection as Finding
        try:
            load_dotenv()
            APP_ID = environ.get("EBAY_APPID")
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
        import json
        results = self.get_results(payload)
        item_list = results['searchResult']['item']
        return json.dumps(item_list)


    def do_GET(self,page_number=1):
        payload = {
            'keywords': 'CGC',
            'categoryId': ['259104'],
            'itemFilter': [
                {'name': 'StartTimeNewest'}
            ],
            'entriesPerPage':100,
            'pageNumber':page_number
        }          
        json_items = self.search_ebay(payload)
        self.send_response(200)
        self.send_header('Content-type', 'plain/text')
        self.end_headers()
        self.wfile.write(str(json_items))
