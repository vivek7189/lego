function Bnode(data){
    this.left=this.right=null;
    this.data=data;
}
var Btree= function(){
this.root=null;
}

var bt5=new Btree();
bt5.root=new Bnode(1);
bt5.root.left=new Bnode(3);
bt5.root.right=new Bnode(2);
bt5.root.right.left=new Bnode(5);
bt5.root.right.right=new Bnode(4);

var bt6=new Btree();
bt6.root=new Bnode(1);
bt6.root.left=new Bnode(2);
bt6.root.right=new Bnode(3);
bt6.root.left.left=new Bnode(4);
bt6.root.left.right=new Bnode(5);


function areMirrorImage(nodeA,nodeB){
    if(nodeA === null && nodeB === null){
        return true
    }
    if(nodeA === null || nodeB === null){
        return false
    }
    if(nodeA.data === nodeB.data && areMirrorImage(nodeA.left,nodeB.right) 
    && areMirrorImage(nodeA.right,nodeB.left)){
        return true;
    }else{
        return false;
    }
}
//console.log('mirror image',areMirrorImage(bt5.root,bt6.root));


var bt6=new Btree();
bt6.root=new Bnode(20);
bt6.root.left=new Bnode(10)
bt6.root.right=new Bnode(40);
bt6.root.left.left= new Bnode(5);
bt6.root.left.right=new Bnode(15);
bt6.root.left.right.left=new Bnode(12);
bt6.root.left.right.right=new Bnode(18);
bt6.root.right.left=new Bnode(30);
bt6.root.right.right=new Bnode(45);
function morriseTraversal(node){
    //debugger
        let current=node;
       while(current !== null){
        if(current.left === null){
            console.log("morris1",current.data);
            current=current.right;
        }else{
            // find pre order predecessor
            let pre=current.left;
            while(pre.right !== null && pre.right !== current){
                    pre=pre.right
            }
            if(pre.right === null){
                    pre.right=current;
                    current=current.left
            }else{
                pre.right=null;
                console.log('morris2',current.data);
                current=current.right
            }
        }
       }

}
//morriseTraversal(bt6.root);
// maximum contiguos sub array

let arr1=[-2, -3, 4, -1, -2, 1, 5, -3];

function maxSumContinues(arr){
    let max_so_far=0;
    let max_ending_here=0;
    for(let i=0;i<arr.length;i++){
        max_ending_here=max_ending_here+arr[i];
        if(max_so_far <max_ending_here){
                max_so_far=max_ending_here
        }
        if(max_ending_here <0){
            max_ending_here=0
        }
    }
    return max_so_far
}

//console.log("maximum sum continuous",maxSumContinues(arr1));

let arr2=[1, -2, -3, 0, 7, -8, -2];

function maxProductContinus(arr){

}
//console.log('max product',maxProductContinus(arr2));

let rainwaterArr=[];
function rainWaterTripStore(arr){

}
console.log(rainWaterTripStore(rainwaterArr));
function LinkedList(){
    this.data=0;
    this.next=null
}
function ListNode(data){
        this.data=data;
        this.next=null
}
let list6 =new LinkedList();
list6.next=new ListNode(1);
list6.next.next=new ListNode(3);
list6.next.next.next=new ListNode(8);
list6.next.next.next.next=new ListNode(10);
list6.next.next.next.next.next=new ListNode(15);

let list7 =new LinkedList();
list7.next=new ListNode(2);
list7.next.next=new ListNode(4);
list7.next.next.next=new ListNode(5);
list7.next.next.next.next=new ListNode(14);
list7.next.next.next.next.next=new ListNode(25);
function MergeTwosortedList(a,b){
    console.log('list888',a,b);
    let newList=new LinkedList();
    if(a=== null && b === null){
        returnnewList
    }
    if(a=== null){
        return b;
    }
    if(b=== null){
        return a;
    }
    let currentA=a.next;
    let currentAnext=a.next.next;
    let currentB=b.next;
    let currentBnext=b.next.next;
    if(0 && currentAnext && currentBnext){
        if(currentAnext.data>currentB.data){

        }
    }
   
}

//console.log('sorted list',MergeTwosortedList(list6,list7));

let arr7=[25,2,8,9,56,90,56];

function MergeSort(arr){
        let mid=Math.floor((arr.length/2));

        if(arr.length === 1){
            return arr;
        }else{
            
           let leftArr= MergeSort(arr.slice(0,mid));
           let rightArr= MergeSort(arr.slice(mid));

           //console.log('leftArr',leftArr);
           //console.log('rightArr',rightArr);
           let mergedArr=mergeArr(leftArr,rightArr);
           //console.log('merged array',mergedArr);
           return mergedArr;
        }
}

function mergeArr(arr1,arr2){
    //console.log("merge",arr1,arr2);
    let temp=[];
    while(arr1.length && arr2.length){
        if(arr1[0]<arr2[0]){
            temp.push(arr1[0]);
            arr1 = arr1.slice(1)
        }else{
            temp.push(arr2[0]);
            arr2=arr2.slice(1);
        }
    }
    while (arr1.length)
    temp.push(arr1.shift());
    while (arr2.length)
    temp.push(arr2.shift());
   // console.log("temp",temp);
    return temp;
}
//console.log('merge sort',MergeSort(arr7));



var items = [
    { name: 1, value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 2, value: 37 }
  ];
function sortArrayItems(arr){
        //debugger
        arr.sort((a,b)=>{
            if(a.name >b.name){
                return 1
            }else if(a.name < b.name){
                return -1
            }else{
                return 0
            }
        })
  console.log(arr);
}
console.log("add details",sortArrayItems(items));

let arr8=[4,7,3,6,2,5,8];

function findContinousElem(arr){
        let min=1000;
        let max=-1;
        //debugger
        for(let i=0;i<arr.length;i++){
                min=Math.min(min,arr[i]);
                max=Math.max(max,arr[i]);
        }
        console.log(max,min);
        let visited=[];
        for(let j=0;j<max-min+1;j++){
                visited[j]=false
        }
        for(let j=0;j<arr.length;j++){
            //debugger
            visited[arr[j]-min]=true;
        }
        for(let j=0;j<max-min+1;j++){
            //debugger
            if(visited[j] !== true){
                console.log("not continues");
            }
        }
}
findContinousElem(arr8);


var bt7=new Btree();
bt7.root=new Bnode(1);
bt7.root.left=new Bnode(2);
bt7.root.left.left=new Bnode(4);
bt7.root.left.right=new Bnode(5);

bt7.root.right=new Bnode(3);
bt7.root.right.right=new Bnode(7);

bt7.root.right.left=new Bnode(6);

let verticalSumObj={};
let HD=0;
function getVerticalSum(node,HD){
    if(node === null){
        return 0;
    }
    let nodeData=node.data;
    verticalSumObj[nodeData]=HD;

    getVerticalSum(node.left,HD-1);
    getVerticalSum(node.right,HD+1);
}

getVerticalSum(bt7.root,HD);
console.log("verticalSumObj",verticalSumObj);

//         1
//     2      3
//   4   5  6      7



function getHeight(nood){
    if(nood == null){
        return 0
    }
    let left=getHeight(nood.left);
    let right=getHeight(nood.right);
    return Math.max(left,right)+1
}
///console.log(getHeight(bt7.root));
function getValuevs(nood){
            if(nood == null){
                return 0;
            }
    let height=getHeight(bt7.root);
    for(let i=0;i<height;i++){
        printLevelOrder(nood,i);
    }
}
function printLevelOrder(node,level){
    if(node === null){
        return false;
    }
    if(level === 0){
        console.log(node.data);
    }
    printLevelOrder(node.left,level-1);
    printLevelOrder(node.right,level-1);
}
//getValuevs(bt7.root);


function leastCommonA(nood,a,b){
        if(nood === null){
            return null
        }
        if(a === null || b === null){
            return false
        }
        if(nood.data === a || nood.data == b){
            return nood.data
        }
        let left=leastCommonA(nood.left,a,b);
        let right=leastCommonA(nood.right,a,b);

        if(left !== null && right !== null){
                return nood.data
        }

        return left?left:right;
}
console.log(leastCommonA(bt7.root,6,5));

let list8 =new LinkedList();
list8.next=new ListNode(1);
list8.next.next=new ListNode(2);
list8.next.next.next=new ListNode(1);
list8.next.next.next.next=new ListNode(0);


let left=list8;
function checkRecursionPalindrom(list){
    if(list === null){
        return true;
    }
   let checkPalin=checkRecursionPalindrom(list.next);
   if(checkPalin === false){
            return false
   }
   let checkCurrentVal=list.data === left.data;
   left =left.next;
return checkCurrentVal;
}

console.log('li',checkRecursionPalindrom(list8));


let arr9=[2,3,10,6,401,8,-1];

function maxDiff(arr){
    let firstDiff=arr[1]-arr[0];
    let min=arr[0];
    for(let i=1;i<arr.length;i++){
            if(arr[i]-min >firstDiff){
                firstDiff=arr[i]-min;
            }
             if(min >arr[i]){
                    min=arr[i]
            }
    }
    return firstDiff;
}
console.log(maxDiff(arr9));


function twoLargeNumber(arr){
        let first=-1;
        let second=-1;
        for(let i=0;i<arr.length;i++){
                if(arr[i]>first){
                    second=first 
                    first=arr[i]; 
                }else if(arr[i]>second){
                    second=arr[i];
                }
                
        }
        console.log('first two',first,second);
}

twoLargeNumber(arr9);



let arr10=[2,3,10,6,401,8,-1];

function selection(arr){
        for(let i=0;i<arr.length;i++){
            let min=i;
                for(let j=i+1;j<arr.length;j++){
                        if(arr[j] <arr[min]){
                            min=j
                        }
                }
                let temp=arr[min];
                arr[min]=arr[i];
                arr[i]=temp;
                console.log(min);
        }
        console.log(arr);
}
selection(arr10);


function fastEnough(arr,start,end){
        let i=start;
        let j=end;
        let middle=Math.floor(i+j/2)
        let piv=arr[middle];

        while(i < j){
            //debugger
                while(arr[i]<piv){
                        i++;
                }
                while(arr[j]>piv){
                    j--;
                }
                if(i<j){
                    let temp=arr[j];
                    arr[j]=arr[i];
                    arr[i]=temp
                }
                break;
        }
     
}
fastEnough(arr9,0,6);


function heap(arr){
    let arrLn=arr.length;

    for(let i=Math.floor(arrLn/2); i>=0;i--){
            heapify(arr,arrLn,i);
    }

    for(let j=arrLn-1;j>=0;j--){
            let temp=arr[i]
            heapify(arr,j,0)
    }
    console.log("hep",arr);
}
//  10
//2   3
//6 -1 8
function heapify(arr,n,i){
            let largest=i;
            let left=2*i;
            let right=2*i+1;

            if(arr[largest]<arr[left]){
                largest=left
            }
            if(arr[largest]<arr[right]){
                largest=right
            }
            if(largest !== i){
                let temp=arr[largest];
                arr[largest]=arr[i];
                arr[i]=temp;

                heapify(arr,arr.length,largest);
            }
            
}
heap(arr9);

let arr11=[100, 180, 260, 310, 40, 535, 695];

function profiteSellmax(arr){
    console.log("");
    let arrLen=arr.length;
    let count=0;
    let i=0;
    while(i<arrLen-1){
            while(0){

            }
    }
}
profiteSellmax(arr11);







































