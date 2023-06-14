
// DFS - recursive
var isValidBST = function(root) {
    return checkBST(root, null, null);
};


function checkBST(node, min, max) {
    if (node === null) return true;

    if (min !== null && node.val <= min) return false;
    if (max !== null && node.val >= max) return false;

    return (
        checkBST(node.left, min, node.val) &&
        checkBST(node.right, node.val, max)
    );
}



// DFS - iterative
var isValidBST = function(root) {
    
    // 스택의 처음 - 루트 노드, 최소값 - 없음, 최대값 - 없음.
    const stack = [{node: root, min:null, max:null}];

    while (stack.length) {
        // 스택에서 값을 가져옴.
        const {node, min, max} = stack.pop();

        // 노드가 있으면 
        if (node) {

            // 에러 판별 조건
            if((min !== null && node.val <= min) ||(max !== null && node.val >= max) ) {
                return false;
            }
            
            // 오른쪽으로 이동 -> 현재 값이 최소 값, max 값 조건은 부모 노드 값 유지
            stack.push({node: node.right, min: node.val, max: max});
            // 왼쪽으로 이동 -> 핸재 값이 최대 값, mix 값 조건은 부모 노드 값 유지
            stack.push({node: node.left, min: min, max: node.val});
        }
    }

    return true;

};
