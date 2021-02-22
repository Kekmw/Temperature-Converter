          // Main Functions
          
          let fah = num1 => {
            let Num = parseFloat(num1);
            let ans = Num * 9/5 + 32;
            let ans2 = Math.round(ans * 100)/100;
            document.getElementById("ans2").innerHTML = ans2;
        };

          let cel = num1 => {
            let Num = parseFloat(num1);
            let ans = (Num - 32) * 5/9;
            let ans2 = Math.round(ans * 100)/100;
            document.getElementById("ans1").innerHTML = ans2;
        };