/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} nums
 * @return {number}
 */
var numComponents = function(head, nums) {
    
    // 서브셋 숫자를 세는 변수 
    let componentCnt = 0;
    let node = head;
    let sequentialCond = false;
    let index = 0 ;

    while(node) {

        index = nums.indexOf(node.val);

        if (index >= 0) {
            if (!sequentialCond) {
                componentCnt++;
                sequentialCond = true;
            }
        } else {
            sequentialCond = false;
        }

        node = node.next;
    }

    return componentCnt;

};