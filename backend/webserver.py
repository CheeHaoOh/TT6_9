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

JSONObject = Dict[AnyStr, Any]
JSONArray = List[Any]
JSONStructure = Union[JSONArray, JSONObject]
api = FastAPI(openapi_url=None,docs_url=None,redoc_url=None)

@api.get("/jquery")
async def jqueryfunc():
    file_in_question = "libs/jquery.js"
    with open(file_in_question) as f:
        content = f.read()
    content_type, _ = guess_type(file_in_question)
    return Response(content, media_type=content_type)

@api.get("/check")
async def checkfunc(myhash: str):
    if True:
        return {"Result": "Now"}
    else:
        return {"Result": "Wait"}

@api.get("/")
async def func():
    with open("html/index.html", 'r') as temp6:
        temp4 = temp6.read()
    return HTMLResponse(temp4)

api.add_middleware(CORSMiddleware,allow_origins="*".split(","),allow_methods=["*"],allow_headers=["*"])
uvicorn.run(api, host="0.0.0.0", port=80)
