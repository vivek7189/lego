var sortedArr=[2,3,5,6,7,8,9,10,11];
function Bnode(data){
        this.left=this.right=null;
        this.data=data;
}
var Btree= function(){
    this.root=null;
}

var bt1=new Btree();
bt1.root=new Bnode(10);
bt1.root.left=new Bnode(-2);
bt1.root.right=new Bnode(7);
bt1.root.left.left=new Bnode(8);
//bt1.root.left.left.left=new Bnode(8);
bt1.root.left.right=new Bnode(-4);

var bt2=new Btree();
bt2.root=new Bnode(1);
bt2.root.left=new Bnode(2);
bt2.root.right=new Bnode(3);
bt2.root.left.left=new Bnode(4);
bt2.root.left.left.left=new Bnode(15);
bt2.root.left.left.right=new Bnode(16);
bt2.root.left.right=new Bnode(5);
bt2.root.left.right.left=new Bnode(18);
bt2.root.left.right.right=new Bnode(19);
bt2.root.right.left=new Bnode(6);
bt2.root.right.right=new Bnode(7);
var maxres=0;
var binaryTree= function(){
    var root;
    return{
        arr:[2,3,4,5,6,7,8,9,10,11],
        dataArr:[],
        dataArr2:[],
        temp:{},
        Node:function(val){
            this.data=val;
            this.left=this.right=null;
        },
       makeBST:function(arr,start,end){
           if(start>end){
                    return null;
           }
           var middle=Math.floor((start+end)/2);
           var node=new this.Node(arr[middle]);
           node.left=this.makeBST(arr,start,middle-1);
           node.right=this.makeBST(arr,middle+1,end);
           return node;
       },
       findMinDepthBst:function(root){
                    if(root === null){
                        return 0;
                     }else if(root.left === null && root.right === null ){
                            return 1;
                     }

                      var leftHeight= root.left?this.findMinDepthBst(root.left):1000;
                      var rightHeight= root.right?this.findMinDepthBst(root.right):1000;

                    return Math.min(leftHeight,rightHeight)+1;
       },
       levelOrderTraversal:function(root){
                if(root === null){
                        return false;
                }else{
                    this.dataArr.push(root);

                    while(this.dataArr.length >0){
                            var node=this.dataArr.shift();
                            //console.log(node.data);
                            if(!node.data){
                                this.dataArr.length=0;
                            }
                            if(node.left !== null){
                                this.dataArr.push(node.left);
                            }
                            if(node.right !== null){
                                this.dataArr.push(node.right);
                            }
                    }
                }
                
       },
       printSpiralBST:function(root){
            if(root === null){
                    return false;
            }else{
                this.dataArr.push(root);
                while(this.dataArr.length > 0 || this.dataArr2.length > 0){
                        while(this.dataArr.length > 0){
                            var node=this.dataArr.shift();
                            //console.log(node.data);
                            if(!node.data){
                                this.dataArr.length=0;
                            }
                            if(node.left){
                                this.dataArr2.push(node.left);
                            }
                            if(node.right){
                                this.dataArr2.push(node.right);
                            }
                            
                        }
                        while(this.dataArr2.length > 0){
                            var node1=this.dataArr2.pop();
                           // console.log(node1.data);
                            if(!node1.data){
                                this.dataArr2.length=0;
                            }
                            if(node1.left){
                                this.dataArr.push(node1.left);
                            }
                            if(node1.right){
                                this.dataArr.push(node1.right);
                            }
                        }
                }
            }
       },
       printVerticalPath(root){
           if(root ==null){
                return false;
           }else{
               var node=root;
               //console.log(node.data);
               if(node.left){

               }
           }
       },
       getHeightBST(root){
           var node=root;
        if(node === null){
                return 0;
        }else{
            let leftHeight=this.getHeightBST(node.left);
            let rightheight=this.getHeightBST(node.right);

            return (1+ (Math.max(leftHeight,rightheight)))
        }
       },
       maxSumPathBst(node){
           
           if(node === null){
                    return 0;
           }else{
               //console.log('L',node.data);
               let left= this.maxSumPathBst(node.left)
                //console.log("R",node.data);
               let right= this.maxSumPathBst(node.right)
                
               let max_single=Math.max(Math.max(left,right)+node.data, node.data);
                let max_top=Math.max(left + right + node.data,max_single);
                
                maxres=Math.max(maxres,max_top);
              // console.log("max max_single",max_top);
               return max_single
           }
       },
       leastCommomAncestorBT(node,n1,n2){
            if(node === null){
                return null;
            }
            let left=this.leastCommomAncestorBT(node.left,n1,n2);
            //console.log(node.data);
            let right= this.leastCommomAncestorBT(node.right,n1,n2);

       }
    }
}
var Node=binaryTree().makeBST(sortedArr,0,sortedArr.length);
//console.log(binaryTree().makeBST(sortedArr,0,sortedArr.length));

//console.log(binaryTree().findMinDepthBst(Node));

//console.log(binaryTree().levelOrderTraversal(Node));
//console.log(binaryTree().printSpiralBST(Node));
//console.log(binaryTree().printVerticalPath(Node));

//console.log("binary tree height",+binaryTree().maxSumPathBst(bt1.root));
//console.log('final maxres',maxres);
//find subarray for specific sum

//console.log("binary tree height",+binaryTree().leastCommomAncestorBT(bt2.root,2,4));
function findSubArrayToSum(arr,sum){
        var start=0,end,currentSum=arr[0];
        for(var i=0;i<arr.length;i++){
           
            while(currentSum > sum){
                currentSum=currentSum -arr[start]
                start++;
            }
            if(currentSum === sum){
                end=i;
                console.log("start :",start,"end:",end);
                return
        }
            currentSum=currentSum+arr[i];
        }
       
}

//findSubArrayToSum([2,4,3,6,4,8,9,10,11,17,13],10) ;



function LinkedList(){
    this.root=null;
    this.length=0;
}
function NodeLs(val){
        this.data=val;
        this.next=null;
}
LinkedList.prototype={
    constructor:LinkedList,
    addNode: function (val){
        if(this.root === null){
            this.root= new NodeLs(val);
        }else{
            var node=this.root;
            while(node.next){
                node=node.next;
            }
            node.next=new NodeLs(val);;
        }
    }
}

//var ls= new LinkedList();
//ls.addNode(2);
//ls.addNode(3);
//ls.addNode(4);
//console.log("linked list",ls);



//heap sort

let heapArray=[7,4,8,9,12,3,5,6,90];
function heapSort(arr){

}


heapSort(heapArray);

let maxDiffarr=[7,4,8,9,12,3,5,6,90];
function maxDiffarrElem(arr){
    let maxSofar=arr[1]-arr[0];
    let minSofar=arr[0];

    for(let j=1;j<arr.length;j++){
            if(arr[j]-minSofar > maxSofar){
                    maxSofar=arr[j]-minSofar
            }
            if(arr[j]<minSofar){
                minSofar=arr[j]
            }
    }
    console.log("max elemnt diff is : ", maxSofar);
}
//maxDiffarrElem(maxDiffarr);


function LinkedList(){
    this.data=0;
    this.next=null
}
function ListNode(data){
        this.data=data;
        this.next=null
}
let list =new LinkedList();
list.next=new ListNode(1);
list.next.next=new ListNode(2);
list.next.next.next=new ListNode(3);
list.next.next.next.next=new ListNode(4);
list.next.next.next.next.next=new ListNode(5);
list.next.next.next.next.next=new ListNode(6);
list.next.next.next.next.next.next=new ListNode(7);
function ReverseInledList(node,k){
    //console.log('linked list',node);
    let current=node;
    let next=null;
    let prev=null;
    let count=0;
    while(current !== null && count<k){
        //debugger
        next=current.next;
        current.next=prev;
        prev=current;
        
        current=next;
        count++
    }
    //node=prev;
    if(next !== null){
        
       node.next= ReverseInledList(next,k);
       console.log("node.next",node.next);
    }
    console.log(prev);
}
//ReverseInledList(list,3);

function middleOfLinkedList(node){
        let first=node.next;
        let second=node.next.next;
        while(second.next !== null){
                first=first.next;
                second=second.next.next
        }
       // console.log("middle point",first);
        return first
}
middleOfLinkedList(list);
let head;
function reverseList(node){
    //debugger
    if(node === null){
        return false
    }
    if(node.next === null){
        head=node;
        return true
    }
    reverseList(node.next);
    node.next.next=node;
    node.next=null;
   // console.log("node list end",head);
    return head;
}
;
//console.log(reverseList(list));

var bt3=new Btree();
bt3.root=new Bnode(20);
bt3.root.left=new Bnode(8);
bt3.root.left.left=new Bnode(7);
bt3.root.right=new Bnode(22);
bt3.root.right.right=new Bnode(23);

let leftLastNode;
function inorderSuccesor(node,val){
    let nodeRef=findNode(node,val);
    if(nodeRef && nodeRef.right){
        let temp=nodeRef.right
        while(temp.left !== null){
            temp=temp.left
        }
        //console.log("inorder successor is",temp.data);
    }else{
        //console.log('leftLastNode',leftLastNode)
        
    }
}
function findNode(node,val){
    if(node === null){
        return null
    }
    if(node.data === val){
        return node;
    }
    if(node.data > val){
        leftLastNode=node;
          return findNode(node.left,val)  
    }
    if(node.data < val){
        return findNode(node.right,val)  
  }
}
inorderSuccesor(bt3.root,4);
//4 8 10 12 14 20 

function heightofBst(node){
    if(node === null)
            return 0;
    if(node.left === null && node.right === null)
                return 0;
     let leftH=heightofBst(node.left);
     let rightH=heightofBst(node.right);

     return Math.max(leftH,rightH)+1;
                
}
//console.log("bst height",heightofBst(bt3.root));
let diameter=0;
function diameterOfBt(node){
    if(node === null){
        return 0;
    }
   let leftHMax=heightofBst(node.left);
   let rightMax=heightofBst(node.right);
   //console.log(1+leftHMax+rightMax);
   diameter=Math.max(diameter, 1+leftHMax+rightMax)
  return Math.max(leftHMax,rightMax)+1
}
diameterOfBt(bt3.root)
//console.log('bst diameter',diameter);


//copy a liked list
function ListNodeDouble(data){
    this.data=data;
    this.next=null;
    this.random=null;
}
let list2 =new LinkedList();
list2.next=new ListNodeDouble(1);
list2.next.next=new ListNodeDouble(2);
list2.next.next.next=new ListNodeDouble(3);

list2.random=list2.next.next.next;
list2.next.random=list2.next.next;
list2.next.next.next.random=list2.next;

function copyLinkedListRandomePointer(list){
           // console.log(list);
            let curr=list;
            let temp;
            //insert copy of node after each node
            // while(curr){
            //     console.log(curr.data);
            //     temp=curr.next;
            //     curr.next=new ListNodeDouble(curr.data);
            //     curr.next.next=temp;
            //     curr=temp
            // }
           // curr=list

           while(curr){
            temp=curr.next;
            curr.next=new ListNodeDouble(curr.data);
            curr.next.next=temp;
            curr=temp;
           }
           curr=list;
           console.log(curr)
         // now add random pointer of each node

        while(curr){
            curr.next.random=curr.random?curr.random.next:null
            curr=curr.next.next
        }
        //now seperate list original and coiped

        let original=list;
        let copied=list.next;
        let temp2;
        while(original){
            temp2=original.next;
            if(original.next){
                original.next=original.next.next
            }
            if(temp2.next){
                temp2.next=temp2.next.next
            }
            original=original.next;
        }
        return copied;
}
//console.log(copyLinkedListRandomePointer(list2),list2.next=null,list2);


//print a matrix in spiral order
//[1 2 3 4
   // 5,6,7,8
//9 10 11 12]
let matrix=[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
function PrintINSpiralMatrix(mtx){
    //console.log(mtx);
    let length=4,height=4;
    let dir='left';
   for(let j=1;j<=mtx.length;j++){
        j%2 === 0?dir='left':dir='right';
        printLevel(1,mtx[j-1],dir);
   }
}
function printLevel(level,mtx,dir){
        if(dir==='left'){
            for(let i=0;i<=mtx.length;i++){
                    //console.log(mtx[i])
            }
        }
        if(dir==='right'){
            for(let i=mtx.length-1;i>=0;i--){
                    //console.log(mtx[i])
            }
        }
}
PrintINSpiralMatrix(matrix);

function printMatrixSnake(mtx){
   console.log('snake',mtx);
  let column=0;
  let columnLast=3;
  let row=0;
  let rowLast=3;

  while(row < rowLast && column < columnLast){
            for(let i=column;i<=columnLast;i++){
                    console.log(mtx[row][i])
            }
            row++
            for(let i=row;i<=rowLast;i++){
                    console.log(mtx[i][columnLast]);
            }
            columnLast--;
            for(let i=columnLast;i>=column;i--){
                
                    console.log(mtx[rowLast][i]);
            }
            rowLast--
            for(let i=rowLast;i>=row;i--){
                console.log(mtx[i][column]);
            }
            column++
            
  }
}
//printMatrixSnake(matrix);


var bt4=new Btree();
bt4.root=new Bnode(20);
bt4.root.left=new Bnode(10);
bt4.root.right=new Bnode(40);
bt4.root.left.left= new Bnode(5);
bt4.root.left.right=new Bnode(15);
bt4.root.right.right=new Bnode(45);
bt4.root.right.left=new Bnode(30);

function convertBtSumTree(node){
        if(node === null){return 0;}
        let oldVal=node.data;
        //console.log('oldval',oldVal);
        let nodeValLeft= convertBtSumTree(node.left);
        let nodeValRight=convertBtSumTree(node.right);
        node.data=nodeValLeft +nodeValRight;
        return node.data+oldVal;
}
//convertBtSumTree(bt4.root);


function convertSumNode(node){
    if(node === null || (node.left === null && node.right === null)){
        return node.data;
    }
    //debugger
    let oldVal=node.data;
    let leftNode=convertSumNode(node.left);
    let righNode=convertSumNode(node.right);
    //let oldVal=node.data;
   // console.log('values',oldVal);
    node.data=leftNode+righNode;

    return oldVal

}
convertSumNode(bt4.root);
//console.log(bt4);
var bt4=new Btree();
bt4.root=new Bnode(10);
bt4.root.left=new Bnode(8);
bt4.root.right=new Bnode(2);
bt4.root.left.left= new Bnode(3);
bt4.root.left.right=new Bnode(5);
bt4.root.right.left=new Bnode(2);


function checkChildernSumProperty(node){
      let leftNode=0;let rightNode=0;
        if(node === null || (node.left === null && node.right === null)){
            return 1;
        }
        if(node.left){
            leftNode=node.left.data;
        }
        if(node.right){
            rightNode=node.right.data;
        }
        if(node.data === leftNode + rightNode && checkChildernSumProperty(node.left) && checkChildernSumProperty(node.right)){
                return 1;
        }else{
            return 0
        }
        
}
//console.log('check children sum prop,',checkChildernSumProperty(bt4.root));

function checkNodeSiblings(node,a,b){
        if(node === null){
            return false
        }
        
        if((node.data === a && node.data ===b)|| (node.data === b && node.data === a)
    || checkNodeSiblings(node.left,a,b) || checkNodeSiblings(node.right,a,b)){
                return true
        }else{
            return false
        }
}
//console.log("check siblings",checkNodeSiblings(bt4.root,5,15));
let nodeLevel=1;
function findLevel(node,val,level){
    if(node === null){
        return 0;
    }
    if(node.data === val){
        return level;
    }
    let leftNode= findLevel(node.left,val,level+1);
    let rightNode= findLevel(node.right,val,level+1);
    return leftNode?leftNode:rightNode
}
//console.log("leve is",findLevel(bt4.root,5,nodeLevel));


function mirrorTree(node){
        if(node === null){
            return node;
        }
        let leftNode=mirrorTree(node.left);
        let righNode=mirrorTree(node.right);
        node.left=righNode;
        node.right=leftNode;
        return node;
        
}
//console.log("mirror tree",mirrorTree(bt4.root));