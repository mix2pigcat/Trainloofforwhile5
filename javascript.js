arr=[0,1]
for(var i=2;i<20;i++){
    arr[i]=arr[i-1]+arr[i-2]
}

sum=0;
for ( var i=0;i<20;i++){
    sum=sum+arr[i];

}   document.write(sum+('<br>'))