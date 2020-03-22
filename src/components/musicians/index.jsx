import React from 'react'
import Box from '@material-ui/core/Box'
import MaterialTable from 'material-table'
import { withRouter } from 'react-router'

class Musicians extends React.Component {
  render() {
    return (
      <div>
        <Box>
          <MaterialTable 
          title = 'Index des Musiciens'
          options={
            {
              filtering: true
            }
          }
          >
          </MaterialTable>
        </Box>
      </div>
    )
  }
}

export default withRouter(Musicians)
