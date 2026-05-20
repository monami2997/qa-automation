let status_code=512
if (status_code>=200 && status_code <=299)
    console.log("Success");
else if (status_code>=300 && status_code <=399)
    console.log("Redirection");
else if (status_code>=400 && status_code <=499)
    console.log("Client Error");
else if (status_code>=500 && status_code <=599)
    console.log("Server Error");
else
    console.log("Invalid");