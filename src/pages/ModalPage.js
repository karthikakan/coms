import { useState } from "react";
import Button from "../components/Button";
import Modal from '../components/Modal';


function ModalPage(){
    const [showModal,setShowModal]=useState(false);

    const handleClick=()=>{
        setShowModal(true);
    };

    const handleClose=()=>{
        setShowModal(false);
    };

    const ActionButton=<Button succes rounded onClick={handleClose}>
                        Agree
                    </Button>;

    const modal=<Modal onChange={handleClose} action={ActionButton}> 
            Agree or not?
        </Modal>;

    return <div>
        <p>
            The European languages are members of the same family. Their separate existence is a myth. 
            For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ 
            in their grammar, their pronunciation and their most common words. Everyone realizes why a 
            new common language would be desirable: one could refuse to pay expensive translators. To 
            achieve this, it would be necessary to have uniform grammar, pronunciation and more common 
            words. If several languages coalesce, the grammar of the resulting language is more simple 
            and regular than that of the individual languages. The new common language will be more 
            simple and regular than the existing European languages. It will be as simple as Occidental; 
            in fact, it will be Occidental. To an English person, it will seem like simplified English, 
            as a skeptical Cambridge friend of mine told me what Occidental is. The European languages 
            are members of the same family. Their separate existence is a myth. For science, music, 
            sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, 
            their pronunciation and their most common words. Everyone realizes why a new common language 
            would be desirable: one could refuse to pay expensive translators. To achieve this, it would 
            be necessary to have uniform grammar, pronunciation and more common words. If several 
            languages coalesce, the grammar of the resulting language is more simple and regular than 
            that of the individual languages. The new common language will be more simple and regular 
            than the existing European languages. It will be as simple as Occidental; in fact, it will 
            be Occidental. To an English person, it will seem like simplified English, as a skeptical 
            Cambridge friend of mine told me what Occidental is. The European languages are members of 
            the same family. Their separate existence is a myth. For science, music, sport, etc, Europe 
            uses the same vocabulary. The languages only differ in their grammar, their pronunciation and 
            their most common words. Everyone realizes why a new common language would be desirable: one 
            could refuse to pay expensive translators. To achieve this, it would be necessary to have 
            uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar 
            of the resulting language is more simple and regular than that of the individual languages. 
            The new common language will be more simple and regular than the existing European languages. 
            It will be as simple as Occidental; in fact, it will be Occidental. To an English person, 
            it will seem like simplified English, as a skeptical Cambridge friend of mine told me what 
            Occidental is.The European languages are members of the same family. Their separate existence 
            is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only 
            differ in their grammar, their pronunciation and their most common words. Everyone realizes why 
            a new common language would be desirable: one could refuse to pay expensive translators. 
            To achieve this, it would be necessary to have uniform grammar, pronunciation and more common.
        </p>
        <p>
            The European languages are members of the same family. Their separate existence is a myth. 
            For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ 
            in their grammar, their pronunciation and their most common words. Everyone realizes why a 
            new common language would be desirable: one could refuse to pay expensive translators. To 
            achieve this, it would be necessary to have uniform grammar, pronunciation and more common 
            words. If several languages coalesce, the grammar of the resulting language is more simple 
            and regular than that of the individual languages. The new common language will be more 
            simple and regular than the existing European languages. It will be as simple as Occidental; 
            in fact, it will be Occidental. To an English person, it will seem like simplified English, 
            as a skeptical Cambridge friend of mine told me what Occidental is. The European languages 
            are members of the same family. Their separate existence is a myth. For science, music, 
            sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, 
            their pronunciation and their most common words. Everyone realizes why a new common language 
            would be desirable: one could refuse to pay expensive translators. To achieve this, it would 
            be necessary to have uniform grammar, pronunciation and more common words. If several 
            languages coalesce, the grammar of the resulting language is more simple and regular than 
            that of the individual languages. The new common language will be more simple and regular 
            than the existing European languages. It will be as simple as Occidental; in fact, it will 
            be Occidental. To an English person, it will seem like simplified English, as a skeptical 
            Cambridge friend of mine told me what Occidental is. The European languages are members of 
            the same family. Their separate existence is a myth. For science, music, sport, etc, Europe 
            uses the same vocabulary. The languages only differ in their grammar, their pronunciation and 
            their most common words. Everyone realizes why a new common language would be desirable: one 
            could refuse to pay expensive translators. To achieve this, it would be necessary to have 
            uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar 
            of the resulting language is more simple and regular than that of the individual languages. 
            The new common language will be more simple and regular than the existing European languages. 
            It will be as simple as Occidental; in fact, it will be Occidental. To an English person, 
            it will seem like simplified English, as a skeptical Cambridge friend of mine told me what 
            Occidental is.The European languages are members of the same family. Their separate existence 
            is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only 
            differ in their grammar, their pronunciation and their most common words. Everyone realizes why 
            a new common language would be desirable: one could refuse to pay expensive translators. 
            To achieve this, it would be necessary to have uniform grammar, pronunciation and more common.
        </p>
        <p>
            The European languages are members of the same family. Their separate existence is a myth. 
            For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ 
            in their grammar, their pronunciation and their most common words. Everyone realizes why a 
            new common language would be desirable: one could refuse to pay expensive translators. To 
            achieve this, it would be necessary to have uniform grammar, pronunciation and more common 
            words. If several languages coalesce, the grammar of the resulting language is more simple 
            and regular than that of the individual languages. The new common language will be more 
            simple and regular than the existing European languages. It will be as simple as Occidental; 
            in fact, it will be Occidental. To an English person, it will seem like simplified English, 
            as a skeptical Cambridge friend of mine told me what Occidental is. The European languages 
            are members of the same family. Their separate existence is a myth. For science, music, 
            sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, 
            their pronunciation and their most common words. Everyone realizes why a new common language 
            would be desirable: one could refuse to pay expensive translators. To achieve this, it would 
            be necessary to have uniform grammar, pronunciation and more common words. If several 
            languages coalesce, the grammar of the resulting language is more simple and regular than 
            that of the individual languages. The new common language will be more simple and regular 
            than the existing European languages. It will be as simple as Occidental; in fact, it will 
            be Occidental. To an English person, it will seem like simplified English, as a skeptical 
            Cambridge friend of mine told me what Occidental is. The European languages are members of 
            the same family. Their separate existence is a myth. For science, music, sport, etc, Europe 
            uses the same vocabulary. The languages only differ in their grammar, their pronunciation and 
            their most common words. Everyone realizes why a new common language would be desirable: one 
            could refuse to pay expensive translators. To achieve this, it would be necessary to have 
            uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar 
            of the resulting language is more simple and regular than that of the individual languages. 
            The new common language will be more simple and regular than the existing European languages. 
            It will be as simple as Occidental; in fact, it will be Occidental. To an English person, 
            it will seem like simplified English, as a skeptical Cambridge friend of mine told me what 
            Occidental is.The European languages are members of the same family. Their separate existence 
            is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only 
            differ in their grammar, their pronunciation and their most common words. Everyone realizes why 
            a new common language would be desirable: one could refuse to pay expensive translators. 
            To achieve this, it would be necessary to have uniform grammar, pronunciation and more common.
        </p>
        <Button primary rounded onClick={handleClick}>Next</Button>
        {showModal && modal}
    </div>;
};

export default ModalPage;