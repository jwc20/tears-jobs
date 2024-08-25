class AddUrlAndSourceToScrapedLiJobListingsTable < ActiveRecord::Migration[7.2]
    def change
        add_column :scraped_li_job_listings, :source, :text
        add_column :scraped_li_job_listings, :scraped_from, :text
    end
end
