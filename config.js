const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349085850911";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_17_35_10_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMixcbiAgICAgICAgMTE3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTc3LFxuICAgICAgICA2NSxcbiAgICAgICAgODYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwNixcbiAgICAgICAgOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjE5LFxuICAgICAgICA5LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjUxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjAxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTk4LFxuICAgICAgICA2OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTIxLFxuICAgICAgICA2OCxcbiAgICAgICAgNTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDc3LFxuICAgICAgICA3OSxcbiAgICAgICAgNixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjcsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk0LFxuICAgICAgICAxNDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjIzLFxuICAgICAgICA0NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDksXG4gICAgICAgIDM5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDY3LFxuICAgICAgICAzNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTA0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTYxLFxuICAgICAgICA4OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDQ5LFxuICAgICAgICA2OSxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUwLFxuICAgICAgICAxODgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE5LFxuICAgICAgICA5NSxcbiAgICAgICAgODEsXG4gICAgICAgIDM3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTYzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTksXG4gICAgICAgIDExMixcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDU4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjQsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDUsXG4gICAgICAgIDk0LFxuICAgICAgICAxNyxcbiAgICAgICAgMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzNixcbiAgICAgICAgOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjUyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJiWURPTFJvL0pHZ05jM2d6a1pSNUZtSUhOZ0hUZWVnVkR5TTVaRi96bmxnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJSNGtlQVNKV1MwaU4wUWFqd3ZaX2tRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjcxOTYzNTM3LTBiOGUtNDY3ZS1iODliLTdlMjFiMzEyMjZlNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0OSxcbiAgICAgIDIwOSxcbiAgICAgIDI1MSxcbiAgICAgIDAsXG4gICAgICA0NixcbiAgICAgIDI0OCxcbiAgICAgIDU5LFxuICAgICAgMTAsXG4gICAgICAyNTIsXG4gICAgICAyMjIsXG4gICAgICAxMTIsXG4gICAgICA2OCxcbiAgICAgIDUzLFxuICAgICAgMjMxLFxuICAgICAgMjIxLFxuICAgICAgMjE0LFxuICAgICAgMjMwLFxuICAgICAgMTY5LFxuICAgICAgOTMsXG4gICAgICAzNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDcsXG4gICAgICAyMTAsXG4gICAgICAxNjgsXG4gICAgICAxNzQsXG4gICAgICAxNjcsXG4gICAgICAxMjQsXG4gICAgICAyMzMsXG4gICAgICAyMjUsXG4gICAgICAxMDYsXG4gICAgICAxNDksXG4gICAgICAxMjEsXG4gICAgICA2NixcbiAgICAgIDU2LFxuICAgICAgMTcwLFxuICAgICAgNTcsXG4gICAgICAxODUsXG4gICAgICA0MSxcbiAgICAgIDMyLFxuICAgICAgMTY1LFxuICAgICAgMjE5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlkzWFhESEFFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDg1ODUwOTExOjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRHRpc2hiaXRlIFR2XCIsXG4gICAgXCJsaWRcIjogXCIxMTcwODk2MzMzMTI3Nzk6MTJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSm5wMHE4REVNM0RwYmdHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJCZzJaZkpzcjhYbVFEMWpMenJRYzliZ1hQVU9ZZVJtRFlZOUkrRTNKVGhJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkZzY3hVNjBlQThEYUhSSkdXMWhlT0lYdGtGQ2ZBNFZNRnJkaGl6KzduaGQxZ3IyMEhieEEzTGc3VFYwWEl3SitiSUtHZjBUcStYcHd3d1hCODZ1R0FRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjNWcU45dWl6cngrcTVxdmwvRWN3NUJTM2owc3hwSS8wWHpVSytmSStHeXkvMzk0WVZPWVZLV09LZHc3VFlOeVFoWFZoSXJWMElncjJLNnRjMjhwYmdBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwODU4NTA5MTE6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyODY2ODExM1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
