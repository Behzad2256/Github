



function visTxt()
	{
		var språktype="";
 //En variabel som seinere får verdien av det språket som blir valgt i dropdown menyen. idielt for å skrive ut navnet på det språket som blir valgt. 

		språktype = document.getElementById("select_id").value; 
//Henter språk/verdien fra dropdown menyen

		if(språktype=="")
		{
			document.getElementById("melding").innerHTML="Velkommen til en mystisk verden av programmeringsspråk?";}//Hvis det ikke er noe verdi valgt, et tomt felt, skal denne if setningen skriv velg et språk

		else{document.getElementById("melding").innerHTML="Du har selektert programeringsspråk " +språktype; //Når det er valgt en verdi skal denne else setningen skrive "Du har valgt programeringsspråk" + språktype. språktype er variablen med verdi valgt språk.

		}

		}
		
 

function konstruksjon()
{
alert("Denne siden er under konstruksjon!");
}

