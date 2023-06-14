/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
    return mergeSort(head);
};

function mergeSort(head) {
    // 값이 없거나 1개만 있을 때
    if (!head || !head.next) {
        return head;
    }

    // 좌우를 분리
    const [left, right] = splitList(head);
    const _left = mergeSort(left);
    const _right = mergeSort(right);

    return merge(_left, _right);
}

function splitList(head) {
    let right = head;
    // 링크드 리스트의 길이가 n이라고 하면 한번에 2칸식 이동 하면 1/2만큼의 길이를 알 수 있음.
    let stepper2 = head;
    let leftEnd = null;

    do {
        leftEnd = right;
        right = right.next;
        stepper2 = stepper2.next.next; // 두칸 씩 앞으로 가면서 끝까지 이동
    } while (stepper2 && stepper2.next);

    leftEnd.next = null; // 왼쪽의 마지막에서 오른쪽 노드와의 연관 관계를 끊는다.

    /*
    head ~ right -1
    right ~ end
  */
    return [head, right];
}

function merge(left, right) {
    // 합쳐지는 노드의 정보의 시작 위치 - 1
    const newHeadBefore = new ListNode(0, null);
    let current = newHeadBefore;

    while (true) {
        // 왼쪽과 오른쪽은 이미 정렬이 되어있다고 판단.
        if (left.val < right.val) {
            current.next = left;

            if (left.next) {
                left = left.next;
            } else {
                // left에 나머지가 없는 경우, right를 붙임
                current = current.next;
                current.next = right;
                break;
            }
        } else {
            //
            current.next = right;

            if (right.next) {
                right = right.next;
            } else {
                // Right에 나머지가 없는 경우, left를 붙임
                current = current.next;
                current.next = left;
                break;
            }
        }

        current = current.next;
    }

    return newHeadBefore.next;
}
