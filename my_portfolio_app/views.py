from django.http import JsonResponse, HttpResponseRedirect
import json
from django.shortcuts import render
from django.core.mail import send_mail



def send_mail_password(request):
    # if request.headers.get('x-requested-with') == 'XMLHttpRequest':
    if request.headers.get('x-requested-with') == 'XMLHttpRequest':
    
        data_from_post = (json.load(request)['post_data']).split(",")
        print(data_from_post)
        name=  data_from_post[0]
        email =  data_from_post[1]
        subject =  data_from_post[2]
        message =  data_from_post[3]
        # email_y =  "" #vinay's mail
        print(email)
        send_mail("Email Received","Hi "+name+ "\n Thank You for contacting me. I'll revert back soon. \n Thanks and Regards \n Vinaykumar Patel", 'vinay.vp477@gmail.com', [email])
        send_mail( "Portfolio Website - "+subject,"Name: " +name +"\n"+ " Email: " + email +"\n"+" Subject: " + subject +"\n"+ " Message: " + message +"\n", 'vinay.vp477@gmail.com', ["vinay.vp477@gmail.com"])
        
        data = {
                    'my_data':"yes",
                }            
        return JsonResponse(data)
        
        
    else:
        return HttpResponseRedirect("/")
    

def home_page(request):
    return render(request,"index.html")
