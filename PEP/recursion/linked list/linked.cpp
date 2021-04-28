#include <iostream>

using namespace std;
class Node
{
    public:
    int data ;
    Node* next;
    Node(){
        this->data=0;
        this->next=NULL;
        
    }Node(int data, Node* next){
        this->data=data;
        this->next=next;
    }

};
   int getsize(Node*  head){
    int temp=0 ;
    Node* counter =head;
    while(counter !=NULL ){
        counter =counter->next;
        temp++;
    }
    return temp;
}
void addlast(Node* & head, Node* & tail, int data)
{
    if (head== NULL){
        head = tail = new Node (data,NULL);
    }
    else {
        tail->next=new Node(data,NULL);
        tail=tail->next;
    }
}
void display(Node* head )
{
    for (;head!=NULL;head=head->next){
        cout<<head->data;
    }
}
void addFirst(Node* & head,Node* tail, int data){
    if (head==NULL)
    {
        Node* first=new Node (data,NULL);
        head=tail=first;
    }
    else{
        Node* first = new Node(data,head);
        head = first ;
        
    }
}
int getFirst (Node* head ){
    if (head == NULL){
        return 0;
    }
    else 
    {
        return head->data;
    }
}
int getlast(Node* tail)
{
    if (tail== NULL)
    return 0;
    else 
    return tail-> data;
}
 int getat(Node * head , int idx)
 {int count =0;
 if (head == NULL)
 {
     return 0;
 }
 else {
     for (head ; head != NULL; head =head->next){
       
         if (count == idx ){
             return head-> data;
         }  count ++;
     }
 }return 0 ;
 }
 
  Node* getNodeat(Node * head , int idx)
 {int count =0;
 if (head == NULL)
 {
     return NULL;
 }
 else{
     for (head ; head != NULL; head =head->next){
       
         if (count == idx ){
             return head;
         }  count ++;
     }
 } return NULL;
 }
 void addat(Node* & head , Node* & tail, int data, int idx){
     int sz=getsize(head);
     if (head == NULL){
        addFirst(head,tail,data); 
     }
     else if  (idx == sz){
         addlast(head,tail,data);
     }
     else 
     {Node* pre = getNodeat(head ,idx-1);
     
     pre->next=new Node (data,pre->next);
         
     }
 }
 void removefirst(Node* & head ,Node* & tail){
     int sz=getsize(head);
     if (head ==NULL){
         return;
 } else if(head -> next == NULL){
     Node* temp=head ;
     head=tail=NULL;
     delete temp ;
 }
 
 else {
     Node* temp=head ;
     head=head->next;
     delete temp ;
     
 }
 }
 void removelast(Node* & head,Node* & tail){
     int sz=getsize(head);
    if (head == NULL)
    {
        return;
    }
    else if(head -> next == NULL){
     Node* temp=head ;
     head=tail=NULL;
     delete temp ;
    }
    else {
        Node* slast= getNodeat (head,sz-2);
        
        slast->next=NULL;
        delete tail;
        tail=slast;
    }
 }
 void removeat(Node* & head , Node* & tail,int idx ){
     int sz=getsize(head);
     if (idx <0|| idx>=sz)
     {
         return;
     }
     else if (idx==0)
     removefirst(head,tail);
     else if (idx==sz-1)
     removelast(head , tail);
     else{
         Node* pre=getNodeat(head,idx-1);
         Node* cur= pre->next;
         Node* nex=cur->next;
         pre->next=nex;
         delete cur;
     }
 }
 void datarev(Node* head ){
     int i =0 , j , k;
     j=getsize(head);
     k=j/2;
     
     for (;k!=0;k--)
     {
         
         Node* temp = getNodeat(head,i);
         Node* temp2 = getNodeat(head,j-1);              //    change data
         int temp3 ;
         temp3=temp->data;
         temp->data=temp2->data;
         temp2->data=temp3;
         i++;
         j--;
        
         
     }
 }
 void pointrev(Node* & head , Node* & tail){
    Node* pre =NULL;
    Node* curr= head ;                                       ///change ppointer
    while(curr!= NULL){
        Node* temp = curr->next;
        
        curr->next=pre;
        pre=curr;
        curr=temp;
    }
    Node* temp = head ;
    head = tail ;
    tail = temp;
 }




 void displayrecur(Node* head){
     if (head==NULL)
     return;
     displayrecur(head->next);
     cout<<head->data;
     
 }
//data recursion
void revrec(Node* & left,Node* right , int floo,int & size){
   if (right==NULL)
   {
       return;
   }size++;
   revrec(left,right->next,floo+1,size);
   if(floo>=size/2){
       int temp= left -> data;
       left-> data= right-> data;
       right-> data = temp;
   }
   left=left->next;}



// pointer recursion reverse
void reverrecpoi(Node* left,Node* & head,Node* & tail){

 if (left->next==NULL)
{   tail=head;
    head=left;
    return;
}
reverrecpoi(left->next,head,tail);
left->next->next=left;
left->next=NULL;


}

   void fold (Node* & left , Node* right , Node* & tail, int floor , int & size){            //a-b-c-d-e-f-g    = a-g-b-f-c-e-d
    if (right == NULL)
    return;
    size++;
    fold (left , right->next,tail,floor+1,size);
    if(floor>size/2){
    Node* temp= left ->next;
    left->next=right;
    right->next= temp;
    left=temp;}
    else if (floor=size){
        tail=right;
        tail->next=NULL;
    }
   }



bool pallindrom (Node* & left , Node* right , Node* & tail, int floor , int & size){   
      bool vari=true;         //a-b-c-d-e-f-g    = a-g-b-f-c-e-d
    if (right == NULL)
    return true;
    size++;
   vari= pallindrom (left , right->next,tail,floor+1,size);
    if(floor>=size/2){
        
        if(left->data==right->data && vari==true){
            left=left->next;
            return true;
        }
    else
        return false;
    }
    return vari;
   }
   


   //sort 2 list 
   void merge(Node* h1,Node* h2, Node* & h3,Node* & t3){
       if (h1!=NULL && h2!= NULL){
           if(h1->data<h2->data){
               addlast(h3,t3,h1->data);
               h1=h1->next;
           }
           else{
               addlast(h3,t3,h2->data);
               h2=h2->next;
           }

       }
       if(h1!=NULL)
       {
           addlast(h3,t3,h1->data);
               h1=h1->next;
       }
       if(h2!=NULL)
       {
           addlast(h3,t3,h2->data);
               h2=h2->next;
       }
   }
   Node* midNode(Node* head, Node* tail){
       int i=0;
       Node* slow=head;
       Node* fast = head;
      while(fast->next!=NULL&& fast->next->next!=NULL){
           slow=slow->next;
           fast=fast->next->next;
           i++;

       }
       cout<<i;
       return slow;
   }
   Node* kthfromlast(Node* head,int k){
       Node* slow=head;
       Node* fast = head;
       for (int i=0 ; i<k;i++){
           fast=fast->next;
       }
       while(fast!=NULL){
           fast=fast->next;
           slow=slow->next;
       }
       return slow;

   }

   void mergesort(Node* & head,Node* & tail){
       if (head==tail)
       {head->next=NULL;
           return;
       }
       Node* mid=(midNode(head,tail));
       Node* lh=head;
       Node* lt=mid;
       Node* rh=mid->next;
       Node* rt=tail;
       mergesort(lh,lt);
       mergesort(rh,rt);
       Node* fh=NULL;
       Node* ft=NULL; 
        merge(lh,rh,fh,ft); 
        head=fh;
        tail=ft;
        }

int main( int argc,char**argv)
{Node* head = NULL;
Node* tail=NULL;
    addlast(head,tail,40);
    addlast(head,tail,10);
    addat(head,tail,80,1);
    addFirst(head,tail,430);
   removelast(head,tail);
   addFirst(head,tail,800);
 //  int sie=getsize(head);
  bool ans;
  
   // display(head);
  //datarev(head);
    //display(head);
    cout<<endl;
    //displayrecur(head);
    int floo=0,size=0;
    Node* left= head;
    Node* right= head;
   // revrec(left,right,floo,size);
   // display(head);
  // int e= getFirst(head);
   //int f= getlast(tail);
//cout << e<< f;
//ans=pallindrom(left,right,tail,floo,size);
//cout<<ans;
midNode(head,tail);
//reverrecpoi(left,head,tail);
//display(head);
    return 0;
}
