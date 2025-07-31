namespace eUseControl.BusinessLogic.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddMembershipStatusToUserTable : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Users", "Details", c => c.Boolean(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Users", "Details");
        }
    }
}
