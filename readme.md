
### Api documentation

<!--   {
    
        "airline": "kei",
        "flightNo": "435",
        "departure": "dsf",
        "arrival": "dfdl",
        "departureTime":12,
        "arrivalTime": 18,
        "seats": 23,
        "price": 34
      } -->



POST
/api/register
This endpoint allow users to register and  Hashing of  the password happen here


POST
/api/login
This endpoint allow users to login. 



GET
/api/flights
This endpoint return a list of all available flights.


GET
/api/flights/:id
This endpoint return the details of a specific flight identified by its ID.



POST
/api/flights
This endpoint allow users to add new flights to the system.


PUT / PATCH
/api/flights/:id
This endpoint allow users to update the details of a specific flight identified by its ID.



DELETE
/api/flights/:id
This endpoint allow users to delete a specific flight identified by its ID.


POST
/api/booking
This endpoint allow the user to book flights.



GET
/api/dashboard
This point list all the bookings so far with the user and flight details.



PUT/PATCH
/api/dashboard/:id
This endpoint allow the user to edit / update a booking.



DELETE
/api/dashboard/:id
This endpoint allow the user to delete a booking





 video link :-
 https://drive.google.com/drive/folders/1601rqKArw9buRRmp3TNCyvT_-vGUI9pp?usp=sharing