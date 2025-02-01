// Delay -> Initially kitna wait krega
// Duration -> Kitna time lagega us animation ko complete krne me.

// key-frame :  
animate={{
        x: [0, 500, 500, 0, 0],
        y: [0, 0, 400, 400, 0]
      }}

// Drag Properties

drag
whileDrag={{
        backgroundColor: "red",
      }}

dragConstraints={{
        left: 0,
        top: 0,
        bottom: 400,
        right: 400,
}}
dragDirectionLock="true"  // ek hi direction me move krega
