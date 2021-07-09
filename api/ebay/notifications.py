from http.server import BaseHTTPRequestHandler


class handler(BaseHTTPRequestHandler):
  
  
  def do_GET(self):
    import hashlib
    import hashlib
    from urllib.parse import urlparse


    query = urlparse(self.path).query
    query_components = dict(qc.split("=") for qc in query.split("&"))
    challenge_code = query_components["challenge_code"]

    verification_token = 'KpFTCRfbImSLyLxKHyE4abXo4iywHI9q'
    endpoint = 'https://collective-stock.vercel.app/api/ebay/notifications'
    m = hashlib.sha256((challenge_code+verification_token+endpoint).encode())
    hash = m.hexdigest()
    challenge_response = {
      'challengeResponse': hash
    }

    import json
    json_string = json.dumps(challenge_response)


    self.send_response(200)
    self.send_header('Content-type', 'application/json')
    self.end_headers()
    #self.wfile.write(json_string.encode('utf-8'))
    self.send_response(200, json_string)