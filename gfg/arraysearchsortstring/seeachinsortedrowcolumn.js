search(matrix, n, m, x)
    {
    	// code here
    	let i =0;
    	let j = matrix[0].length-1;
    	while (i<n && j>=0){
    	    if(matrix[i][j] == x) {
    	        return 1;
    	    }
    	    if(matrix[i][j]>x){
    	        j--;
    	    } else {
    	        i++;
    	    }
    	}
    	return 0;
    }

    // Accolite Directi Goldman Sachs Groupon InMobi MakeMyTrip Ola Cabs One97 Oracle Paytm Polycom TinyOwl Visa
    //most imp