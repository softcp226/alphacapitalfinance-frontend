const write_percentage = (percentage, earning) => {
    document.querySelector(
      "#percentage",
    ).innerHTML = `Expected Return :${earning}`;
  };
  const show_err = () => {
    document.querySelector("#amount").style.border = "2px solid red";
    document.querySelector(".errMessage").innerHTML =
      "Investment amount can not be lesser than minimum investment for the plan selected";
  };

  const show_excede_err = () => {
    document.querySelector("#amount").style.border = "2px solid red";
    document.querySelector(".errMessage").innerHTML =
      "Investment amount can not excede maximum investment amount for the plan selected, please choose another plan";
  };

  const disable_show_err = () => {
    document.querySelector("#amount").style.border = "2px solid #fff";
    document.querySelector(".errMessage").innerHTML = "";
  };
  let profit;
  
  const handle_request = () => {
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
        
              break;

  
      default:
        handle_keychange();
        break;
    }
  };
  
  const handle_keychange = () => {
    if (!amount.value) return display_error(amount);
    hide_error(amount);
    if (!plan.value) return display_error(plan);
    hide_error(plan);
    
    handle_request();
  };
  
  