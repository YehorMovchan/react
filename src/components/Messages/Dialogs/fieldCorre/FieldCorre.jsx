import FieldCss from './FieldCorre.module.css';
import FieldItem from './FieldItem';




const FieldCorre =(props)=>{
    let fieldItem=props.state.messagePage.fieldItemObject.map(el=><FieldItem id={el.id} sender={el.sender} value={el.value} avatar={el.avatar}/>)
    return (
        <div className={FieldCss.field}>
            {fieldItem}
        </div>
    );
}


export default FieldCorre;