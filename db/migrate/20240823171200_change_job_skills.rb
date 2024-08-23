class ChangeJobSkills < ActiveRecord::Migration[7.2]
    def up
      change_column :job_skills, :skills, :text, array: true, default: [], using: "(ARRAY[skills])"
    end
    
    def down
      change_column :job_skills, :skills, :text
    end
  end