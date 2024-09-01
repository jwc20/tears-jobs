class AddCompanyNameToJobListings < ActiveRecord::Migration[7.2]
  def change
    add_column :job_listings, :company_name, :string
  end
end
