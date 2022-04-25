import DBO from 'dbo';
import { TaskAction } from "../../client/vng/models/index.js";

const { dbo } = DBO;

export default () => {
    return dbo.VNG_TaskAction.bulkCreate([ // Returning and thus passing a Promise here
        // {
        //     [TaskAction.Name]: 'approval',
        //     [TaskAction.DisplayName]: 'Approved',
        //     [TaskAction.IsSystem]: 1,
        //     [TaskAction.IsActive]: 1,
        // },
        // {
        //     [TaskAction.Name]: 'open',
        //     [TaskAction.DisplayName]: 'Opened',
        //     [TaskAction.IsSystem]: 1,
        //     [TaskAction.IsActive]: 1,
        // },
        // {
        //     [TaskAction.Name]: 'reject',
        //     [TaskAction.DisplayName]: 'Rejected',
        //     [TaskAction.IsSystem]: 1,
        //     [TaskAction.IsActive]: 1,
        // },
        // {
        //     [TaskAction.Name]: 'delegate',
        //     [TaskAction.DisplayName]: 'Delegated',
        //     [TaskAction.IsSystem]: 1,
        //     [TaskAction.IsActive]: 1,
        // },
        // {
        //     [TaskAction.Name]: 'close',
        //     [TaskAction.DisplayName]: 'Closed',
        //     [TaskAction.IsSystem]: 1,
        //     [TaskAction.IsActive]: 1,
        // },
        // {
        //     [TaskAction.Name]: 'cancel',
        //     [TaskAction.DisplayName]: 'Canceled',
        //     [TaskAction.IsSystem]: 1,
        //     [TaskAction.IsActive]: 1,
        // },
        // {
        //     [TaskAction.Name]: 'comment',
        //     [TaskAction.DisplayName]: 'Commented',
        //     [TaskAction.IsSystem]: 1,
        //     [TaskAction.IsActive]: 1,
        // },
        // {
        //     [TaskAction.Name]: 'history',
        //     [TaskAction.DisplayName]: 'History',
        //     [TaskAction.IsSystem]: 1,
        //     [TaskAction.IsActive]: 1,
        // },
        // {
        //     [TaskAction.Name]: 'note',
        //     [TaskAction.DisplayName]: 'Note',
        //     [TaskAction.IsSystem]: 1,
        //     [TaskAction.IsActive]: 1,
        // },
        // {
        //     [TaskAction.Name]: 'submit',
        //     [TaskAction.DisplayName]: 'Submitted',
        //     [TaskAction.IsSystem]: 1,
        //     [TaskAction.IsActive]: 1,
        // },
        // {
        //     [TaskAction.Name]: 'import',
        //     [TaskAction.DisplayName]: 'Imported',
        //     [TaskAction.IsSystem]: 1,
        //     [TaskAction.IsActive]: 1,
        // },
        // {
        //     [TaskAction.Name]: 'expire',
        //     [TaskAction.DisplayName]: 'Expired',
        //     [TaskAction.IsSystem]: 1,
        //     [TaskAction.IsActive]: 1,
        // },
        // {
        //     [TaskAction.Name]: 'done',
        //     [TaskAction.DisplayName]: 'Done',
        //     [TaskAction.IsSystem]: 1,
        //     [TaskAction.IsActive]: 1,
        // },
        // {
        //     [TaskAction.Name]: 'addreqapproval',
        //     [TaskAction.DisplayName]: 'Approval added',
        //     [TaskAction.IsSystem]: 1,
        //     [TaskAction.IsActive]: 1,
        // },
        // {
        //     [TaskAction.Name]: 'deleteapproval',
        //     [TaskAction.DisplayName]: 'Approval deleted',
        //     [TaskAction.IsSystem]: 1,
        //     [TaskAction.IsActive]: 1,
        // },
        // {
        //     [TaskAction.Name]: 'reqapproval',
        //     [TaskAction.DisplayName]: 'Approval requested',
        //     [TaskAction.IsSystem]: 1,
        //     [TaskAction.IsActive]: 1,
        // },
        // {
        //     [TaskAction.Name]: 'approve',
        //     [TaskAction.DisplayName]: 'Approved',
        //     [TaskAction.IsSystem]: 1,
        //     [TaskAction.IsActive]: 1,
        // },
        // {
        //     [TaskAction.Name]: 'close',
        //     [TaskAction.DisplayName]: 'Closed',
        //     [TaskAction.IsSystem]: 1,
        //     [TaskAction.IsActive]: 1,
        // },
        // {
        //     [TaskAction.Name]: 'create',
        //     [TaskAction.DisplayName]: 'Created',
        //     [TaskAction.IsSystem]: 1,
        //     [TaskAction.IsActive]: 1,
        // },
        // {
        //     [TaskAction.Name]: 'forward',
        //     [TaskAction.DisplayName]: 'Forwarded',
        //     [TaskAction.IsSystem]: 1,
        //     [TaskAction.IsActive]: 1,
        // },
        // {
        //     [TaskAction.Name]: 'reject',
        //     [TaskAction.DisplayName]: 'Rejected',
        //     [TaskAction.IsSystem]: 1,
        //     [TaskAction.IsActive]: 1,
        // },
        // {
        //     [TaskAction.Name]: 'reply',
        //     [TaskAction.DisplayName]: 'Replied',
        //     [TaskAction.IsSystem]: 1,
        //     [TaskAction.IsActive]: 1,
        // },
        // {
        //     [TaskAction.Name]: 'req_conver',
        //     [TaskAction.DisplayName]: 'Replied',
        //     [TaskAction.IsSystem]: 1,
        //     [TaskAction.IsActive]: 1,
        // },
        // {
        //     [TaskAction.Name]: 'resend',
        //     [TaskAction.DisplayName]: 'Resent',
        //     [TaskAction.IsSystem]: 1,
        //     [TaskAction.IsActive]: 1,
        // },
        // {
        //     [TaskAction.Name]: 'resolved',
        //     [TaskAction.DisplayName]: 'Resolved',
        //     [TaskAction.IsSystem]: 1,
        //     [TaskAction.IsActive]: 1,
        // },
        // {
        //     [TaskAction.Name]: 'sla_violation',
        //     [TaskAction.DisplayName]: 'Updated',
        //     [TaskAction.IsSystem]: 1,
        //     [TaskAction.IsActive]: 1,
        // },
        // {
        //     [TaskAction.Name]: 'att_add',
        //     [TaskAction.DisplayName]: 'Updated',
        //     [TaskAction.IsSystem]: 1,
        //     [TaskAction.IsActive]: 1,
        // },
        // {
        //     [TaskAction.Name]: 'dissociated',
        //     [TaskAction.DisplayName]: 'Updated',
        //     [TaskAction.IsSystem]: 1,
        //     [TaskAction.IsActive]: 1,
        // },
        // {
        //     [TaskAction.Name]: 'fcr',
        //     [TaskAction.DisplayName]: 'Updated',
        //     [TaskAction.IsSystem]: 1,
        //     [TaskAction.IsActive]: 1,
        // },
        // {
        //     [TaskAction.Name]: 'mergewith',
        //     [TaskAction.DisplayName]: 'Updated',
        //     [TaskAction.IsSystem]: 1,
        //     [TaskAction.IsActive]: 1,
        // },
        // {
        //     [TaskAction.Name]: 'onholdschedule',
        //     [TaskAction.DisplayName]: 'Updated',
        //     [TaskAction.IsSystem]: 1,
        //     [TaskAction.IsActive]: 1,
        // },
        // {
        //     [TaskAction.Name]: 'split',
        //     [TaskAction.DisplayName]: 'Updated',
        //     [TaskAction.IsSystem]: 1,
        //     [TaskAction.IsActive]: 1,
        // },
        // {
        //     [TaskAction.Name]: 'splittedfrom',
        //     [TaskAction.DisplayName]: 'Updated',
        //     [TaskAction.IsSystem]: 1,
        //     [TaskAction.IsActive]: 1,
        // },
        // {
        //     [TaskAction.Name]: 'update',
        //     [TaskAction.DisplayName]: 'Updated',
        //     [TaskAction.IsSystem]: 1,
        //     [TaskAction.IsActive]: 1,
        // },
        // {
        //     [TaskAction.Name]: 'update_notifytype',
        //     [TaskAction.DisplayName]: 'Updated',
        //     [TaskAction.IsSystem]: 1,
        //     [TaskAction.IsActive]: 1,
        // },
        // {
        //     [TaskAction.Name]: 'pending_approve',
        //     [TaskAction.DisplayName]: 'Pending Approval',
        //     [TaskAction.IsSystem]: 1,
        //     [TaskAction.IsActive]: 1,
        // },
        // {
        //     [TaskAction.Name]: 'denied',
        //     [TaskAction.DisplayName]: 'Denied',
        //     [TaskAction.IsSystem]: 1,
        //     [TaskAction.IsActive]: 1,
        // },
        // {
        //     [TaskAction.Name]: 'to_be_sent',
        //     [TaskAction.DisplayName]: 'To Be Sent',
        //     [TaskAction.IsSystem]: 1,
        //     [TaskAction.IsActive]: 1,
        // },
        // {
        //     [TaskAction.Name]: 'delete',
        //     [TaskAction.DisplayName]: 'Deleted',
        //     [TaskAction.IsSystem]: 1,
        //     [TaskAction.IsActive]: 1,
        // },
        // {
        //     [TaskAction.Name]: 'approve_in_queue',
        //     [TaskAction.DisplayName]: 'Approve in queue',
        //     [TaskAction.IsSystem]: 1,
        //     [TaskAction.IsActive]: 1,
        // },
        // {
        //   [TaskAction.Name]: 'reject_in_queue',
        //   [TaskAction.DisplayName]: 'Reject in queue',
        //   [TaskAction.IsSystem]: 1,
        //   [TaskAction.IsActive]: 1,
        // },
        {
            [TaskAction.Name]: 'question',
            [TaskAction.DisplayName]: 'Question',
            [TaskAction.IsSystem]: 1,
            [TaskAction.IsActive]: 1,
        }
    ]);
}