var data = [
    {
        id: 'qwert1' ,
        title: 'Private Room',
        location: 'Toronto',
        price: 100,
        image: '/images/hotelroom1.jpg'
    },
    {
        id: 'qwert2',
        title: 'Entire Room',
        location: 'Ottawa',
        price: 120,
        image: '/images/hotelroom2.jpg'
    },
    {
        id: 'qwert3',
        title: 'Hotel Room',
        location: 'Ontario',
        price: 150,
        image: '/images/hotelroom3.jpg'
    },
    {   
        id: 'qwert4',
        title: 'Balcony Room',
        location: 'Ottawa',
        price: 150,
        image: '/images/hotelroom5.jpg'
    },
    {
        id: 'qwert5',
        title: 'Single Room',
        location: 'Toronto',
        price: 140,
        image: '/images/hotelroom6.jpg'
    },  
    {
        id: 'qwert6',
        title: 'Single Bed Room',
        location: 'Ontario',
        price: 150,
        image: '/images/hotelroom7.jpg'
    }

]

const rooms= document.querySelectorAll('.room-options');
const displayoff = document.querySelector('.rooms-section');
const displayon = document.querySelector('.room-booking');



for (let room of rooms){
room.addEventListener('click' , onclick)


function onclick(e){
    console.log(e.target.id);
    as=e.target.id;
    console.log(as);
    
    cli = data[as];
    console.log(cli);


    displayoff.style.display = 'none';
    displayon.style.display = 'block';
    

    console.log( document.querySelector('.room-booking').innerHTML= `   <div class="aligning">
    <img  class="booking-section-pic" src="${cli.image}">
    <div class="flex">
    <div class="room-1-booking-text">
        <h1 class="room-1-booking-heading">${cli.title}-${cli.location}</h1>
        <p class="room-1-booking-para"> Private Room. Our place is set up with a lot of love and care and we would love to host 
            famalies that are looking for a vacation 'home'. We have 3 bedrooms, a lounge, kitchen,
            and a dining room. The place is fully equipped with cutlery, crockery, an oven, microwave 
            and a fridge. We have instant geezers in every washroom. It is ideally located and the
            view will leave you mesmerized. Looking forward to hosting you.</p>
    </div> 
    <div class="booking-form">
        <h1 class="booking-card-heading">BOOKING</h1>
        <form>
            <div class="booking-card">
                <P class="booking-card-text">Check-In</P>
                <input type="date" class="booking-field-form" name="email" id="checkin-date"  >
                <P class="booking-card-text">Check-out</P>
                <input type="date" class="booking-field-form" name="email" id="checkout-date"  >
                <div class="booking-field-list">
                    <ul class="booking-field-list-items">
                        <li>Price Per Night = $${cli.price} </li>
                        <li>Number Of Days  =      </li>
                        <li>Total Price =          </li>
                    </ul>
                </div>
                <a href="payment.html"> <div class="btn" >
                
                    <div class="booking-btn" >Book</div>

                 </div></a>
            </div>
        </form>
    </div>
</div>
</div>
`) 

    
  
}

}



