export const containerVariants = {
    initial: {
        x: '100vw',
        opacity: 0,
    },
    animate: {
        x: '0',
        opacity: 1,
        transition: {
            type: 'spring',  /* أو tween */
            stiffness: 120, /* الاهتزاز او الارتجاج */
            // delay: 0.5,
            mass: 0.4,/*  التأرجح يمينا ويسارا - تعمل فقط مع سبرينغ  */ /*  */
            damping: 8,  /*مدة الخمود للتارجح وتوضع صفر للحدوث بلا توقف - تعمل فقط مع سبرينغ */
            when: 'beforeChildren', /* نضعها في العنصر الأب لنقول له أننا نريد تنفيذ تأثيره قبل تأثير afterChildrenأبناءه  ويمكن كتابة بدلأ عنها */
            staggerChildren: 0.4 /*  وقت الانتظار للحدوث بين كل عنصر ابن والأخر  */
        }
    }
}

export const nextVariants = {
    initial: {
        x: '-100vw',
    },
    animate: {
        x: '0',
        transition: {
            type: 'spring',
            stiffness: 120,
        }
    }

}



export const childVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
    }

}





export const buttonVariants = {
    animate: {
        // x: -20, /* هنا نقوم بتغيير مكان العنصر 20 بكسل لليسار */
        /* ولكن لو أردنا القيام بعد تغييرات متتالية به علينا استعمال keyframes 
        بالشكل الآتي */
        // x: [0,-20,20,-20,0],

        transition: { delay: 2 }

    },


    hover: {
        scale: 1.1,
        // scale: [1,1.1,1,1.1,1,1.1,1], /* بدلاً من ذلك يمكننا استعمال خاصية yoyo للتكرار*/
        textShadow: '0px 0px 8px rgb(255,255,255)',
        boxShadow: '0px 0px 8px rgb(255,255,255)',
        transition : { yoyo : Infinity} /*  أو يمكننا كتابة  عدد معين من مرات التكرار , يويو */
    }
}
