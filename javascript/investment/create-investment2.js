amount.onkeyup = () => handle_keychange();
plan.onchange = () => handle_keychange();

const handle_submit_request = async (form) => {
  const token = getCookie("token");
  const user = getCookie("user");
  document.querySelector("#submit").innerHTML = "proccesing...";
  try {
    const response = await fetch(
      // "http://localhost:5000/api/user/create_investment",
      "https://alphacapitalfinance-backend.glitch.me/api/user/create_investment",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          token,
          user,
          investment_plan: form.plan,
          investment_amount: form.amount,
          // completion_time: form.completion_time,
          return_time: form.completion_time,
          profit: form.profit,
        }),
      },
    );
    const result = await response.json();
    console.log("response:",result);
    if (result.error) {
      document.querySelector(".errMessage").innerHTML = result.errMessage;
      document.querySelector("#submit").innerHTML = "try again";
      return;
    }
    document.querySelector("#submit").innerHTML = "success";
    window.location.href = `/action/loading.html`;
  } catch (err) {
    document.querySelector(".errMessage").innerHTML = err.message;
    document.querySelector("#submit").innerHTML = "try again";
  }
};

const handle_button_request = () => {
  switch (plan.value) {
      case "Starter Plan":
        if (!amount.value) return;
        if (!plan.value) return;
        if (parseInt(amount.value) < 20) return show_err();
        if (parseInt(amount.value) > 500) return show_excede_err();

        disable_show_err();
        var percentage = "15% return after 1 Day";
        var earning = `Expected Earning: $${Math.round(
          (amount.value / 100) * 15,
        )}`;
        profit = Math.round((amount.value / 100) * 15);
        write_percentage(percentage, earning);


      handle_submit_request({
        profit,
        plan: plan.value,
        amount: amount.value,
        completion_time: "1 Day",
      });
      break;

      case "Business Plan":
        if (!amount.value) return;
        if (!plan.value) return;
        if (parseInt(amount.value) < 500) return show_err();
        if (parseInt(amount.value) > 2000) return show_excede_err();
        disable_show_err();
        // if (plan.value == "daily_return") {
        var percentage = "25% return after 48 hours";
        var earning = `Expected Earning: $${Math.round(
          (amount.value / 100) * 25,
        )}`;
        profit = Math.round((amount.value / 100) * 25);
        write_percentage(percentage, earning);
      handle_submit_request({
        profit,
        plan: plan.value,
        amount: amount.value,
        completion_time: "48 hours",
      });
      break;

   
      case "Gold Plan":
        if (!amount.value) return;
        if (!plan.value) return;
        if (parseInt(amount.value) < 1000) return show_err();
        if (parseInt(amount.value) > 4000) return show_excede_err();
        disable_show_err();
        // if (return_time.value == "daily_return") {
        var percentage = "35% return after 48 hours";
        var earning = `Expected Earning: $${Math.round(
          (amount.value / 100) * 35,
        )}`;
        profit = Math.round((amount.value / 100) * 35);
        write_percentage(percentage, earning);
  
      handle_submit_request({
        profit,
        plan: plan.value,
        amount: amount.value,
        completion_time: "48 hours",
      });
      break;


      
         case "Exclusive Plan":
          if (!amount.value) return;
          if (!plan.value) return;
          if (parseInt(amount.value) < 5000) return show_err();
          disable_show_err();
          // if (return_time.value == "daily_return") {
          var percentage = "45% return after 48 hours";
          var earning = `Expected Earning: $${Math.round(
            (amount.value / 100) * 45,
          )}`;
          profit = Math.round((amount.value / 100) * 45);
          write_percentage(percentage, earning);
  
      handle_submit_request({
        profit,
        plan: plan.value,
        amount: amount.value,
        completion_time: "48 hours",
      });
      break;


           
      case "Advanced Forex":
            if (!amount.value) return;
            if (!plan.value) return;
            if (parseInt(amount.value) < 1500) return show_err();
            disable_show_err();
            // if (return_time.value == "daily_return") {
            var percentage = "250% return after 2 days";
            var earning = `Expected Earning: $${Math.round(
              (amount.value / 100) * 250,
            )}`;
            profit = Math.round((amount.value / 100) * 250);
            write_percentage(percentage, earning);

            handle_submit_request({
             profit,
             plan: plan.value,
             amount: amount.value,
            completion_time: "2 Days",
            });
           break;



           case "LONG TERM":
            if (!amount.value) return;
            if (!plan.value) return;
            if (parseInt(amount.value) < 20000) return show_err();
            disable_show_err();
            // if (return_time.value == "daily_return") {
            var percentage = "265% return after 30 days";
            var earning = `Expected Earning: $${Math.round(
              (amount.value / 100) * 265,
            )}`;
            profit = Math.round((amount.value / 100) * 265);
            write_percentage(percentage, earning);
      

            handle_submit_request({
             profit,
             plan: plan.value,
             amount: amount.value,
            completion_time: "30 Days",
            });
           break;





    default:
      handle_keychange();
      break;
  }
};


document.querySelector("#submit").onclick = () => {
  let investment_amount = document.querySelector("#amount");
  let plan = document.querySelector("#plan");

  if (!investment_amount.value)
    return (investment_amount.style.border = "2px solid red");
  if (!plan.value) return (plan.style.border = "2px solid red");
  handle_button_request();
};


