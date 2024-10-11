import express from "express"
import mysql from "mysql"
const app =express()
const db =mysql.createConnection(
    {
     host:"localhost",
     user:"root",
     password:"md123"
    }
)