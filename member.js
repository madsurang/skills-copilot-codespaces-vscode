function skillsMember(){
    return {
        restrict: "E",
        templateUrl: "modules/skills/views/member.html",
        controller: "SkillsMemberController",
        cpmtrollerAs: "vm",
        bindToController: true,
        scope: {
            member: "m"
        }
    } ;
}