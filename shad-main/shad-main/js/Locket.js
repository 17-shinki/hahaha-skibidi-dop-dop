/***********************************************
> Code by Ohoang7
***********************************************/
var request = $request;
const options = {
    url: "https://api.revenuecat.com/v1/product_entitlement_mapping",
    headers: {
      'Authorization': request.headers["authorization"],
      'X-Platform': 'iOS',
      'User-Agent': request.headers["user-agent"],
      'X-Logged-Out': 'false' // Thêm header để xử lý trạng thái đăng xuất
    }
}
$httpClient.get(options, function(error, newResponse, data){
  if (error) {
    $done({});
    return;
  }
  
  const ent = JSON.parse(data);
  let jsonToUpdate = {
    "request_date_ms": Date.now(),
    "request_date": new Date().toISOString(),
    "subscriber": {
      "entitlements": {
        "Gold": {
          "grace_period_expires_date": null,
          "purchase_date": new Date().toISOString(),
          "product_identifier": "com.locket.premium.yearly",
          "expires_date": "2099-12-31T01:01:01Z"
        }
      },
      "first_seen": new Date().toISOString(),
      "last_seen": new Date().toISOString(),
      "management_url": null, 
      "non_subscriptions": {},
      "original_app_user_id": request.headers["X-App-User-Id"] || "70B24288-83C4-4035-B001-573285B21AE2",
      "original_application_version": "9692",
      "original_purchase_date": new Date().toISOString(),
      "other_purchases": {},
      "subscriptions": {
        "com.locket.premium.yearly": {
          "billing_issues_detected_at": null,
          "expires_date": "2099-12-31T01:01:01Z",
          "grace_period_expires_date": null,
          "is_sandbox": false,
          "original_purchase_date": new Date().toISOString(),
          "ownership_type": "PURCHASED",
          "period_type": "normal",
          "purchase_date": new Date().toISOString(),
          "store": "app_store",
          "unsubscribe_detected_at": null
        }
      }
    }
  };
  
  body = JSON.stringify(jsonToUpdate);
  $done({body});
});
