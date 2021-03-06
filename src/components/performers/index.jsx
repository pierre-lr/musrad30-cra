import React from 'react'
import MaterialTable from 'material-table'
import { withRouter } from 'react-router'
import axios from 'axios'

// this.props.history.push("/musician/133c5242-11de-419f-b6bf-3b61170a20d2")

class Performers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      performersData: [],
    }
  }

  componentDidMount() {
    axios.get('http://data-iremus.huma-num.fr/api/musrad30/performers/').then(res => {
      this.setState({ performersData: res.data })
    })
  }

  render() {
    if (!this.state.performersData) {
      return <div>Données en cours de téléchargement...</div>
    } else {
      return (
        <div style={{ maxWidth: '100%' }}>
          <MaterialTable
            title='Liste des interprètes'
            columns={[
              { title: 'Nom', field: 'surname' },
              { title: 'Prenom', field: 'given_name' },
              { title: 'Nationalité', field: 'nationality_label' },
              { title: 'Style', field: 'style_label' },
            ]}
            options={{
              pageSize : 20,
              pageSizeOptions : [10,20,50],
              filtering : true,
              sorting : true
            }}
            data={this.state.performersData}
            onRowClick={((evt, selectedRow) => {
              const performerId = selectedRow.performer.slice(-36)
              this.props.history.push('/musician/'+performerId)
            })}
          >

          </MaterialTable>
        </div>
      )
    }
  }
}

export default withRouter(Performers)
