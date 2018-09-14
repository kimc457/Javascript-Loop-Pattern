var myArray = [
			["ONE", "red"],
			["TWO", "blue"],
			["THREE", "red"],
			["FOUR", "blue"],
  		["FIVE", "red"],
  		["ONE", "red"],
			["TWO", "blue"],
			["THREE", "red"],
			["FOUR", "blue"],
  		["FIVE", "red"],
  		["ONE", "red"],
			["TWO", "blue"],
			["THREE", "red"],
			["FOUR", "blue"],
  		["FIVE", "red"],
  		["ONE", "red"],
			["TWO", "blue"],
			["THREE", "red"],
			["FOUR", "blue"],
  		["FIVE", "red"],
  		["ONE", "red"],
			["TWO", "blue"],
			["THREE", "red"],
			["FOUR", "blue"],
  		["FIVE", "red"],
  			["ONE", "red"],
			["TWO", "blue"],
			["THREE", "red"],
			["FOUR", "blue"],
  		["FIVE", "red"],
  		["ONE", "red"],
			["TWO", "blue"],
			["THREE", "red"],
			["FOUR", "blue"],
  		["FIVE", "red"],
  		["ONE", "red"],
			["TWO", "blue"],
			["THREE", "red"],
			["FOUR", "blue"],
  		["FIVE", "red"],
  		["ONE", "red"],
			["TWO", "blue"],
			["THREE", "red"],
			["FOUR", "blue"],
  		["FIVE", "red"],
  		["ONE", "red"],
			["TWO", "blue"],
			["THREE", "red"],
			["FOUR", "blue"],
  		["FIVE", "red"],
  		["ONE", "red"],
			["TWO", "blue"],
			["THREE", "red"],
			["FOUR", "blue"],
  		["FIVE", "red"],
  		["FOUR", "blue"],
		];

  for (var i = 0; i < myArray.length; i++) {

			var element = document.createElement("div")
			element.className = "newHeader"

			var arrayValue = myArray[i];
			var arrayValueOne = arrayValue[1];


			var style = "";

			if (typeof arrayValueOne == "number" ) {
				style = 'style="font-size: ' + arrayValueOne + 'px;"'
			}else{
				style = 'class="' + arrayValueOne + '"'
			}

			element.innerHTML = `

				<h1 ${style} >${arrayValue[0]}</h1>

			`				
			
			document.getElementById("wrapper").appendChild(element)

		}