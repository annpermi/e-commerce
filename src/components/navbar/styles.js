import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(()=>({
    appBar: {
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    },
    flex: {
        justifyContent: 'space-between'
    }
}))