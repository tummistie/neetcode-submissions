/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */

class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        if(head == nullptr){
            return nullptr;
        }
        else if(head->next == nullptr){
            return head;
        }
        else{
            ListNode* curr = head;
            ListNode* prev = nullptr;
            ListNode* temp = head->next;

            while(curr != nullptr){
                curr->next = prev;
                prev = curr;
                curr = temp;
                if(curr != nullptr){
                    temp = curr->next;
                }
            }

            return prev;
        }
    }
};
