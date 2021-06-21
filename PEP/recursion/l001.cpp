#include<iostream>
#include <vector>


// // // void printincreasing(int a,int b)
// // // {
// // //     if(a==b+1)
// // //     return;
// // //    cout<<a
// // //     printincreasing(a+1,b);
    
// // //  return;
// // // }
// // int answer=1;
// // void power(int a, int b){
     
// //     if (b<=0)
// //     return ;
// //     power(a,b-1);
// //      answer = answer * a;
// //     return ;
   
// // }
// //  void solve()
// //  {int a,b;
// // cin>>a,b;
// //     power(a,b);
// //     cout <<answer;
// //  }
// void solve(int arr [], int key)
// {
//  int i;
//  int idx=0;
// if (arr[idx==key]){
//     i++;
//     int arrs [i];
// }
// solve(int arr [],int idx +1 , int key)
// solve(int arr [],int idx -1 , int key)
// if (arr[idx]==key)
// {for (int j=0;j<i ;j++)
//     arrs[j] = idx;
//     return;
// }
// else {
//     return;
// }
// }
// int main(){
// int array[5] ={ 2,2,3,4,1},i=2;
//     solve(array,i);
//     return 0;
// }
using namespace std;


int hourglassSum(vector<vector<int>>  & arr) {
 int q=0;
   int z=0;
    for (int i=0;i<arr.size()-2;i++){
        for (int j=0;j<arr[0].size()-2;j++){
            int h=i,g=j;q=0;
            for (int k=i;k<i+3;k++){
                for(int l=j;l<j+3;l++){
                if((k==h+1&&l==g)||(k==h+1&&l==g+2)){
                  cout<<" ";
                }
                else{
                    
                    q+=arr[k][l];
                    
                  
                }
                } cout<<endl;

               

            }
             if(q>z)
                    z=q;

}}
    cout<<z;
      return z;
}

 int main()
{
    

    vector<vector < int>> arr{{2,4,3,8,5,7},{6,3,6,3,8,7},{8,5,2,7,5,0},{5,3,4,2,1,5},{8,5,2,7,9,5},{6,0,8,2,6,4}};
       
cout<<hourglassSum(arr);


    return 0;
}


