import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { robotsData } from "../data/robotsData"

const RobotDetail = () => {

   const {robotId} = useParams()
   const [robot, setRobot] = useState({})

   useEffect( () => {
      
     (async () => {
      const robotData = await getRobotDetail()
      if (robotData) {
         setRobot(robotData)        
      }
     })()

   }, [])

   const getRobotDetail = () => {
      return new Promise( (resolve) => {
         setTimeout(() => {
            resolve(robotsData.find(r => r.id === robotId))
         }, 2000);
      })
   }
   

   return(
      <>
         <div>RobotDetail - {robotId}</div>
         <strong>{robot.id}</strong>
         <strong>{robot.name}</strong>
         <strong>{robot.battery}</strong>
      </>
   )
}

export default RobotDetail