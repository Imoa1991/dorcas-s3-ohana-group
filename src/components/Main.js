import React from "react";
import Form from "./Form";
import Visor from "./Visor";

class Main extends React.Component {

	render() {

		return (
			<main className="main__2">

					<Form
								changeName={this.props.changeName}
								name={this.props.name}
								changeJob={this.props.changeJob}
								job={this.props.job}
								palette={this.props.palette}
								changePalette={this.props.changePalette}
								tipography={this.props.tipography}
								changeTipography={this.props.changeTipography}
								skillsList={this.props.skillsList}
		            skillsNumber={this.props.skillsNumber}
            		handleSelectSkills={this.props.handleSelectSkills}
								handleNumberOfSelects={this.props.handleNumberOfSelects}
								skillsSelected={this.props.skillsSelected}
                fileImageRef={this.props.fileImageRef}
                handleImage={this.props.handleImage}
                imageUrl={this.props.imageUrl}
                email={this.props.email}
                changeEmail={this.props.changeEmail}
                phone={this.props.phone}
                changePhone={this.props.changePhone}
                linkedin={this.props.linkedin}
                changeLinkedin={this.props.changeLinkedin}
                github={this.props.github}
                changeGithub={this.props.changeGithub}
								generateJsonToShare={this.props.generateJsonToShare}
								generateCardToShare={this.props.generateCardToShare}
								readyToShare={this.props.readyToShare}
		            design_colapsed={this.props.design_colapsed}
		            fill_colapsed={this.props.fill_colapsed}
		            share_colapsed={this.props.share_colapsed}
		            clickDesign={this.props.clickDesign}
		            clickFill={this.props.clickFill}
		            clickShare={this.props.clickShare}
        />
				 <Visor
								name={this.props.name}
							 	job={this.props.job}
							 	palette={this.props.palette}
							 	tipography={this.props.tipography}
							 	skillsSelected={this.props.skillsSelected}
                imageUrl={this.props.imageUrl}
                email={this.props.email}
                phone={this.props.phone}
                linkedin={this.props.linkedin}
                github={this.props.github}
								resetCard={this.props.resetCard}
				 />
			</main>
			);
	}

}

export default Main;
