from http.server import BaseHTTPRequestHandler


class handler(BaseHTTPRequestHandler):


  def do_GET(self, challenge_code):
    import hashlib
    import hashlib


    verification_token = 'KpFTCRfbImSLyLxKHyE4abXo4iywHI9q'
    endpoint = 'https://collective-stock.vercel.app/api/ebay/notifications'
    m = hashlib.sha256(str(challenge_code+verification_token+endpoint).encode())
    hash = m.hexdigest()

    self.send_response(200)
    self.send_header('Content-type', 'text/plain')
    self.end_headers()
    self.wfile.write((hash).encode())