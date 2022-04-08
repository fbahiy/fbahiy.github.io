//GET URL PARAMS START

function getURLParameter(name) {
    return decodeURIComponent(
        (RegExp(name + "=" + "(.+?)(&|$)").exec(location.search) || [,
            null
        ])[1] || ""
    );
}
var campaign_id = getURLParameter("campaign_id");
var lp_name = getURLParameter("lp_name");
console.log(
    `The campaign ID is: ${
          campaign_id || null
        } and the landing page is called ${lp_name || null}.`
);
// GET URL PARAMS END
// BACK BUTTON START
var back_url = "http://tracker.sukki.shop/go/e8d081d1-c7f5-4a9a-8109-efcac348fb02?campaign_id={campaign_id}&lp_name={lp_name }";
console.log(`The back button URL is now: ${back_url}`);
!(function() {
    var t;
    try {
        const URL = window.location.href.split(/[#]/)[0];
        for (t = 0; 10 > t; ++t) history.pushState({}, "", URL + "#");
        onpopstate = function(event) {
            event.state && location.replace(back_url);
        };
    } catch (o) {
        console.log(o);
    }
})();

// BACK BUTTON END

