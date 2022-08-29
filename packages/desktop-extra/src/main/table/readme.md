```javascript
const columns = [
    {
      id: '123',
      width: 28,
      style: {
        paddingLeft: 0,
        paddingRight: 0,
      },
      accessor: (originalRow) => {
        return {
          status: originalRow.status,
          isCaptured: originalRow.isCaptured,
        }
      },
      Cell: ({ value: { isCaptured, status: { value: status } } }) => {
        return <StatusIconWrapper>{getStatusIcon(status, isCaptured)}</StatusIconWrapper>
      },
    },
    {
      id: '1233',
      minWidth: 220,
      style: {
        paddingLeft: 0,
      },
      accessor: (originalRow) => {
        return {
          comment: originalRow.comment,
          isCaptured: originalRow.isCaptured,
          isShowTxnInfo: originalRow.isShowTxnInfo,
          txnId: originalRow.txnId,
          createdAt: originalRow.createdAt,
          type: originalRow.type,
          status: originalRow.status,
          extras: originalRow.extras,
          haveCaptureTxn: originalRow.haveCaptureTxn,
        }
      },
      Cell: ({ value: { comment, isCaptured, isShowTxnInfo, txnId, createdAt, type, status: { value: status, reasonMessage, reason }, extras = {}, haveCaptureTxn } }) => {
        isCaptured = haveCaptureTxn ? true : isCaptured
        const txnStatus = getStatusTypeText(type, status, isCaptured, extras.closedByAutoAction)

        return (
          <>
            <Flex justify='space-between'>
              <TxnType>{typeLabelMap[type]}</TxnType>
              <FlexItem>
                <DateTime date={createdAt} />
              </FlexItem>
            </Flex>

            {status === 'DECLINED' && reason && <TxnInfo>{i18n.t('txn:reason')}: {reason}</TxnInfo>}
            {status === 'DECLINED' && reasonMessage && <TxnInfo>{i18n.t('txn:details')}: {reasonMessage}</TxnInfo>}

            <TxnInfo>{i18n.t('txn:transactionID')}: {txnId}</TxnInfo>

            {isShowTxnInfo &&
              <TxnInfo onClick={(e) => e.stopPropagation()}>
                <div>{i18n.t('txn:status')}: {txnStatus}</div>
                {type === REFUND && comment && <div>{i18n.t('txn:reason')}: {comment}</div>}
                {extras.cf1 && <div>{i18n.t('txn:cf1')}: {extras.cf1}</div>}
                {extras.cf2 && <div>{i18n.t('txn:cf2')}: {extras.cf2}</div>}
                {extras.cf3 && <div>{i18n.t('txn:cf3')}: {extras.cf3}</div>}
                {extras.cf4 && <div>{i18n.t('txn:cf4')}: {extras.cf4}</div>}
                {extras.cf5 && <div>{i18n.t('txn:cf5')}: {extras.cf5}</div>}
              </TxnInfo>}
          </>
        )
      },
    },
    {
      id: '12323dd3',
      width: 150,
      style: {
        paddingRight: 0,
      },
      accessor: (originalRow) => {
        return {
          type: originalRow.type,
          amount: originalRow.amount,
          originalAmount: originalRow.originalAmount,
        }
      },
      Cell: ({ value: { type, amount: { value, currency } = {}, originalAmount: { value: originalValue, currency: originalCurrency } = {} } }) => {
        let color
        if (type === REFUND) {
          color = '#d0021b'
        }
        const amountValue = value === undefined ? originalValue : value

        return <TxnType style={{ color, textAlign: 'right' }}>
          <Amount value={amountValue} currency={currency || originalCurrency} />
        </TxnType>
      },
    },
  ]

  <Table
    hideHeader
    highlightRow={highlightRow}
    isShowTxnInfo={isShowTxnInfo}
    data={fullData}
    columns={columns}
    rowBounceColor='#ffeed6'
    rowBounceDuration={1.22}
  />
```
