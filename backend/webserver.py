from starlette.responses import HTMLResponse
from fastapi import Request,FastAPI, File, UploadFile, Form, Response
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from typing import Any, Dict, AnyStr, List, Union, Optional
import configparser
import base64
import os
from pathlib import Path
from mimetypes import guess_type
import json
import configparser

JSONObject = Dict[AnyStr, Any]
JSONArray = List[Any]
JSONStructure = Union[JSONArray, JSONObject]
api = FastAPI(openapi_url=None,docs_url=None,redoc_url=None)
config = configparser.ConfigParser()

def getRate(baseCurr,newCurr):
    with open("res/exchangeRate.json", 'r') as j:
         contents = json.loads(j.read())
    for x in contents:
        if (baseCurr == x["base_currency"]) and (newCurr == x["exchange_currency"]):
            return str((x["rate"]))
    return "0"

def getWallet(walletID):
    config.read('db/wallet.txt')
    return str(list(config.items(walletID)))

@api.get("/jquery")
async def jqueryfunc():
    file_in_question = "libs/jquery.js"
    with open(file_in_question) as f:
        content = f.read()
    content_type, _ = guess_type(file_in_question)
    return Response(content, media_type=content_type)

@api.get("/get_rate")
async def get_rate(send_to_server: str):
    baseCurr = send_to_server.split(",")[0]
    newCurr = send_to_server.split(",")[1]
    return {"read-from-server": getRate(baseCurr,newCurr)}

@api.get("/get_wallet")
async def get_wallet(send_to_server: str):
    return {"read-from-server": getWallet(send_to_server)}

@api.get("/get_rate_reference")
async def get_rate_reference():
    with open("html/get_rate_reference.html", 'r') as temp6:
        temp4 = temp6.read()
    return HTMLResponse(temp4)

@api.get("/get_wallet_reference")
async def get_wallet_reference():
    with open("html/get_wallet_reference.html", 'r') as temp6:
        temp4 = temp6.read()
    return HTMLResponse(temp4)

api.add_middleware(CORSMiddleware,allow_origins="*".split(","),allow_methods=["*"],allow_headers=["*"])
uvicorn.run(api, host="0.0.0.0", port=80)
