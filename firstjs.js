var jq = document.createElement("script");
//jq.addEventListener("load", proceed); // pass my hoisted function
jq.src = "http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js";
document.querySelector("head").appendChild(jq);

//function called from users script to load ads from serever
document.addEventListener('DOMContentLoaded',function(){
    alert("working")
    
},false)
function requestAd(userid,api_key,api_token,div_id="adplace"){
	alert('fdgds');
    data={
        'userid':userid,
        'api_key':api_key,
        'api_token':api_token,
        'adunit_id':auid,
        'ua':encodeURIComponent(navigator.userAgent),
        }
        root="../ads/"
        $.ajax(
            {
            url: root+"getAds.php",
            type: "post",
            data: {
                mydata:data
                },
            error:function(x){
                alert("eroor"+x);
                console.log(x);
            },
            success:function(response){
                console.log(response);
                response=JSON.parse(response);
                if(response['msg']="success"){
                    alert(response+" ");
                    processResponse(response);
                    }
                else{
                   alert("load error"+response);
                   
                }
            }
            }
        );
    }