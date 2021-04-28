#include<iostream>
#include <vector>
#include<string>
using namespace std;
// string codes [10]={".","abc","def","ghi","jklm","no","pqrs","tu","vwxy","z"};
// vector<string> grtkpc(string str){
//     if (str.length()==0)
//     {
//         vector<string> myres;
//         myres.push_back("");
//         return myres;
//     }
//     char ch = str[0];
//      string ros = str.substr(1,str.length()-1);
//      vector<string> rres = grtkpc(ros);
//      vector<string> myres;
//      string code = codes[ch-'0'];
//      for ( int i=0; i<code.length();i++){
//      char chcode = code[i];
//      for ( int j=0 ; j<rres.size();j++){
//          string rstr= rres [j];
//          myres.push_back(chcode + rstr);
     
//      }}
//      return myres;}
// int main()
// {vector<string> byres;
//  byres =grtkpc("835");
//  for (int i=0;i<byres.size();i++){
//      cout <<byres[i]<<endl;;
//  }  

// }
// vector <string> staircase( int idx ){
//     if (idx==0)
//     {
//        vector <string > stod;
//        stod.push_back("");  
//        return stod;
//     }
//  vector <string > stod;   
// for ( int step =1; step<=3;step++){
// if (idx>=step){
//     int nbr =idx-step;
//    vector <string > ntod= staircase(nbr);
//    for ( int j=0; j<ntod.size();j++){
//        string ntodpath=ntod [j];
//        string stodpath = to_string(step)+ntodpath;
//        stod.push_back(stodpath);
//    }
// }
// }return stod  ;
// }
// int main()
// {vector<string> byres;
//  byres =staircase(7);
//  for (int i=0;i<byres.size();i++){
//      cout <<byres[i]<<endl;
//  }






//  vector <string > stod(int sr, int sc, int dr,int dc) {
//  if ( sc==dc && sr == dr){
//      vector < string> bp;
//      bp.push_back("");
//      return bp;
//  }
//  vector <string> nh;
//   vector <string> nv;
//   vector <string> paths;

//   if ( sc<dc){
//      nh =stod(sr,sc+1,dr,dc);

//  }
//  if (sr<dc){
//           nv =stod(sr+1,sc,dr,dc);
//  }
// for ( int i=0;i<nv.size();i++){
// paths.push_back("v"+nv[i]);
// }
// for ( int i=0;i<nh.size();i++){
// paths.push_back("h"+nh[i]);
// }
// return paths;
// }
// int main()
// {vector<string> stode;
//  stode =stod(0,0,3,3);
//  for (int i=0;i<stode.size();i++){
//      cout <<stode[i]<<endl;
//  }
// }




// vector < string> soutod ( int sr , int sc, int dr, int dc){
//     vector < string > stod ;
//     vector < string > nbr ;
//     if ( sr==dr && sc== dc){
//         vector < string > byp;
        // byp.push_back("");
//         return byp;
//     }
// for ( int step = 1;step < dc-sc; step++){
//     vector < string > nbr ;
//     nbr=soutod(sr , sc+step,dr,dc)
//     for ( int i=0 ; i< nbr.size(); i++)
//     {
//         stod.push_back("h"+ to_string(step)+ nbr[i]);
        
//     }
    
// }
// for ( int step = 1;step < dr-sr; step++){
//     vector < string > nbr ;
//     nbr=soutod(sr + step, sc,dr,dc)
//     for ( int i=0 ; i< nbr.size(); i++)
//     {
//         stod.push_back("v"+ to_string(step)+ nbr[i]);
        
//     }
// }

// for ( int step = 1;step < dc-sc&&step < dr-sr; step++){
    // vector < string > nbr ;
    // nbr=soutod(sr+step , sc+step,dr,dc)
    // for ( int i=0 ; i< nbr.size(); i++)
//     {
//        soutod.push_back("d"+ to_string(step)+ nbr[i]);
        
//     }
// }
//     return stod ;
// }
// int main()
// {vector<string> stode;
//  stode =stod(0,0,3,3);
//  for (int i=0;i<stode.size();i++){
//      cout <<stode[i]<<endl;
//  }
// }
// vector <string > stair_arr(int src , vector <int> arr ){
//     if ( src == arr.size()-1){
//         vector < string > bp ;
//         bp.push_back("");
//         return bp;
    
//     }
//     if ( src < 0)
//     {
//          vector < string > bp ;
        
//         return bp;
//     }
//     vector < string > stod;
//     vector < string > ntod;
    
//     for ( int i=1 ; i <= arr [src]; i++){
//         // int nbr = src+i;
//         int nbr = arr.size()- (arr.size()-arr.size()-i);
//         if ( i < arr.size()){
//         ntod=stair_arr(nbr,arr);
//         for ( int j =0 ; j< ntod.size(); j++){
//             stod.push_back(to_string(i) + ntod[j]);

//         }
//         }
//     }return stod;
// }
// int main(){
// vector <string > mtod ;
// vector <int> arr {3,2,0,4,1,2,0,2,3,0,1};

// mtod=stair_arr(0, arr);
// for (int i=0;i<mtod.size();i++){
//  cout <<mtod[i]<<endl; 
// }
// }
// starting above equation with up recursion method 
//subsequence 

//     void sortColors(vector<int>& nums) {
//         int i=0,j=nums.size()-1,temp;
//         for ( int k=0 ;k<nums.size();){
//             if ( k<=j){
//             if ( nums[k]==0){
//                 temp=nums[k];
//                 nums[k]=nums[i];
//                 nums[i]=temp;
//                 i++;
//                 k++;
                
//             }
//             else if (nums[k]==2){
//                  temp=nums[k];
//                 nums[k]=nums[j];
//                 nums[j]=temp;
//                 j--;
//             }
//             else{
//                 k++;
//             }}
//         }
        

//     }
// int main(){

// vector <int> arr {1,1,2,0,2,1,0,0};
// sortColors(arr);
// for (int i=0;i<arr.size();i++){
//  cout <<arr[i]<<endl; 


//     }
// }
// int main (){
//    int sum=0; int x ;
//    cin>>x;
//    for ( int i=x;i > 0 ; i ++){
//       int dig= sum%10;
//       sum=sum+dig;
//       sum/10;
       
//    } 
//    cout<< sum;
//    return 0;
// } 

