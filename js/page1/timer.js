let dayNum = document.querySelector(".day");
let hourNum = document.querySelector(".hour");
let minNum = document.querySelector(".min");
let secNum = document.querySelector(".sec");



let set = setInterval(Timer,600);



function Timer() {
	

		let countDownDate = new Date("1403-6-1 10:35:00").getTime();
	

		// دریافت تاریخ و ساعت امروز
		let now = new Date(new persianDate().toLocale('en').format('YYYY-MM-DD hh:mm:ss'));
		
		// بدست آوردن فاصله بین تاریخ امروز تا تاریخی که قراره بهش برسیم
		let distance = countDownDate - now;
		
		// محاسبات روز ، ساعت ، دقیقه و ثانیه
		let days = Math.floor(distance / (1000 * 60 * 60 * 24));
		let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		let seconds = Math.floor((distance % (1000 * 60)) / 1000);
		
		// چاپ کردن تایمر در خروجی
		dayNum.innerHTML = days;
		hourNum.innerHTML = hours; 
		minNum.innerHTML = minutes; 
		secNum.innerHTML = seconds;
    
		
		if(days < 10) {
			
			dayNum.innerHTML = "0" + days;
		}
		if(hours < 10) {
			
			hourNum.innerHTML = "0" + hours;
		}
		if(minutes < 10) {
			
			minNum.innerHTML = "0" + minutes;
		}
		if(seconds < 10) {
			
			secNum.innerHTML = "0" + seconds;
		}

        if(days == 0 && hours == 0 && minutes == 0 && seconds == 0) {

            clearInterval(set);
            dayNum.innerHTML = "0" + days;
            hourNum.innerHTML = "0" + hours;
            minNum.innerHTML = "0" + minutes;
            secNum.innerHTML = "0" + seconds;
        }
}