class CreateJobs < ActiveRecord::Migration[7.2]
  def change
    create_table :jobs do |t|
      t.text :job_title
      t.text :job_url
      t.integer :job_desc_id
      t.integer :company_id

      t.timestamps
    end
  end
end
