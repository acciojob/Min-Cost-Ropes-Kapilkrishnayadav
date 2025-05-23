function mincost(arr)
{ 
//write your code here
// return the min cost
	arr.sort();
	let sum=arr[0],n=arr.length,c=0;
	for(i=1;i<n;i++)
		{
			sum=sum+arr[i];
			c=c+sum;
		}
	return c;
  
}

module.exports=mincost;
