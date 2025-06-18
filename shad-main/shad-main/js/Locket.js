/***********************************************
> Code by Ohoang7
***********************************************/
var request = $request;
const options = {
    url: "https://api.revenuecat.com/v1/product_entitlement_mapping",
    headers: {
     'Authorization' : request.headers["authorization"],
     'X-Platform' : 'iOS' ,
     'User-Agent' : request.headers["user-agent"]
    }
}
$httpClient.get(options, function(error, newResponse, data){
  
const ent = JSON.parse(data);
let jsonToUpdate = {
        "request_date_ms": 1704070861000,
        "request_date": "2024-07-26T01:01:01Z",
        "subscriber": {
            "entitlements": {
                "Gold": {
                    "grace_period_expires_date": null,
                    "purchase_date": "2024-07-26T01:01:01Z", 
                    "product_identifier": "com.locket.premium.yearly",
                    "expires_date": "2099-12-31T01:01:01Z"
                }
            },
            "first_seen": "2024-07-26T01:01:01Z",
            "last_seen": "2024-07-26T01:01:01Z",
            "management_url": null,
            "non_subscriptions": {},
            "original_app_user_id": "70B24288-83C4-4035-B001-573285B21AE2",
            "original_application_version": "9692",
      "original_purchase_date": "2024-07-26T01:01:01Z",
            "other_purchases": {},
            "subscriptions": {
                "com.locket.premium.yearly": {
                    "billing_issues_detected_at": null,
                    "expires_date": "2099-12-31T01:01:01Z",
                    "grace_period_expires_date": null,
                    "is_sandbox": false,
                    "original_purchase_date": "2024-07-26T01:01:01Z",
      "ownership_type": "PURCHASED",
                    "period_type": "normal",
      "purchase_date": "2024-07-26T01:01:01Z",
                    "store": "app_store",
                    "unsubscribe_detected_at": null
  }
}
        }
    };
body = JSON.stringify(jsonToUpdate);
$done({body});
});
