function showCipher() {
	
	let input = document.getElementById("inputtxt").value;
	let change;

	change = input;
	change = change.replaceAll("11110",""); 
	change = change.replaceAll("A","110"); 
	change = change.replaceAll("a","120"); 
	change = change.replaceAll("Ą","130"); 
	change = change.replaceAll("ą","140"); 
	change = change.replaceAll("B","150"); 
	change = change.replaceAll("b","160"); 
	change = change.replaceAll("C" ,"170"); 
	change = change.replaceAll("c" ,"180"); 
	change = change.replaceAll("Ć" ,"190"); 
	change = change.replaceAll("ć" ,"210"); 
	change = change.replaceAll("D" ,"220"); 
	change = change.replaceAll("d" ,"230"); 
	change = change.replaceAll("E" ,"240"); 
	change = change.replaceAll("e" ,"250"); 
	change = change.replaceAll("Ę" ,"260"); 
	change = change.replaceAll("ę" ,"270"); 
	change = change.replaceAll("F" ,"280"); 
	change = change.replaceAll("f" ,"290"); 
	change = change.replaceAll("G" ,"310"); 
	change = change.replaceAll("g" ,"320"); 
	change = change.replaceAll("H" ,"330"); 
	change = change.replaceAll("h" ,"340"); 
	change = change.replaceAll("I" ,"350"); 
	change = change.replaceAll("i" ,"360"); 
	change = change.replaceAll("J" ,"370"); 
	change = change.replaceAll("j" ,"380"); 
	change = change.replaceAll("K" ,"390"); 
	change = change.replaceAll("k" ,"410"); 
	change = change.replaceAll("L" ,"420"); 
	change = change.replaceAll("l" ,"430"); 
	change = change.replaceAll("Ł" ,"440"); 
	change = change.replaceAll("ł" ,"450"); 
	change = change.replaceAll("M" ,"460"); 
	change = change.replaceAll("m" ,"470"); 
	change = change.replaceAll("N" ,"480"); 
	change = change.replaceAll("n" ,"490"); 
	change = change.replaceAll("Ń" ,"510"); 
	change = change.replaceAll("ń" ,"520"); 
	change = change.replaceAll("O" ,"530"); 
	change = change.replaceAll("o" ,"540"); 
	change = change.replaceAll("Ó" ,"550"); 
	change = change.replaceAll("ó" ,"560"); 
	change = change.replaceAll("P" ,"570"); 
	change = change.replaceAll("p" ,"580"); 
	change = change.replaceAll("R" ,"590"); 
	change = change.replaceAll("r" ,"610"); 
	change = change.replaceAll("S" ,"620"); 
	change = change.replaceAll("s" ,"630"); 
	change = change.replaceAll("Ś" ,"640"); 
	change = change.replaceAll("ś" ,"650"); 
	change = change.replaceAll("T" ,"660"); 
	change = change.replaceAll("t" ,"670"); 
	change = change.replaceAll("U" ,"680"); 
	change = change.replaceAll("u" ,"690"); 
	change = change.replaceAll("W" ,"710"); 
	change = change.replaceAll("w" ,"720"); 
	change = change.replaceAll("Y" ,"730"); 
	change = change.replaceAll("y" ,"740"); 
	change = change.replaceAll("Z" ,"750"); 
	change = change.replaceAll("z" ,"760"); 
	change = change.replaceAll("Ź" ,"770"); 
	change = change.replaceAll("ź" ,"780"); 
	change = change.replaceAll("Ż" ,"790"); 
	change = change.replaceAll("ż" ,"810"); 
	change = change.replaceAll("." ,"820"); 
	change = change.replaceAll("," ,"830"); 
	change = change.replaceAll("!" ,"840"); 
	change = change.replaceAll("?" ,"850");
	change = change.replaceAll("(" ,"860"); 
	change = change.replaceAll(")" ,"870"); 
	change = change.replaceAll(";" ,"880"); 
	change = change.replaceAll(":" ,"890"); 
	change = change.replaceAll("^" ,"980"); 
	change = change.replaceAll("–" ,"910"); 
	change = change.replaceAll("-" ,"920"); 
	change = change.replaceAll(" " ,"930"); 
	change = change.replaceAll("„" ,"940"); 
	change = change.replaceAll("”" ,"950"); 
	change = change.replaceAll("@" ,"960"); 
	change = change.replaceAll("%" ,"970");
	change = change.replaceAll(/ /g,"990"); 
  
	document.getElementById("message").innerHTML = change;
}

