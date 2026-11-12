import subprocess
import time
import json
import urllib.request
import base64
import websocket

chrome_exe = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
proc = subprocess.Popen([
    chrome_exe,
    "--headless=new",
    "--remote-debugging-port=9222",
    "--window-size=1280,800",
    "--hide-scrollbars",
    "https://6r93czc7qqtznsnrythdmn.streamlit.app/"
])

try:
    # Wait for Chrome to open debugging port
    time.sleep(2)
    # Get tabs from CDP
    with urllib.request.urlopen("http://127.0.0.1:9222/json") as resp:
        tabs = json.loads(resp.read().decode())
    
    ws_url = tabs[0]["webSocketDebuggerUrl"]
    ws = websocket.create_connection(ws_url)

    # Wait 10 seconds for Streamlit to render via WebSocket
    time.sleep(10)

    # Request screenshot
    req = {
        "id": 1,
        "method": "Page.captureScreenshot",
        "params": {
            "format": "png",
            "quality": 90,
            "clip": {"x": 0, "y": 0, "width": 1280, "height": 720, "scale": 1}
        }
    }
    ws.send(json.dumps(req))
    res = json.loads(ws.recv())
    img_data = base64.b64decode(res["result"]["data"])
    
    out_path = r"C:\Users\CHARAN\.gemini\antigravity\scratch\swathi-portfolio\public\projects\vbcua-cdp.png"
    with open(out_path, "wb") as f:
        f.write(img_data)
    print(f"Captured CDP screenshot: {len(img_data)} bytes")
    ws.close()
finally:
    proc.terminate()

