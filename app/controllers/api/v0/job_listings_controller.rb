module Api
  module V0
    class JobListingsController < ApplicationController
    include Pagy::Backend

      def index
        # render json: JobListing.all
        #   def index
        @pagy, @job_listings = pagy(JobListing.order(created_at: :desc), items: 15)
        render json: { data: @job_listings, **pagy_metadata(@pagy) } # TODO: Use serializer
      end

      # def index 
      #   @pagy, @albums = pagy(Album.order(updated_at: :desc), items: 5)
      #   remder json: {
      #                 data:
      #                 ActiveModel::Serializer::CollectionSerializer.new(
      #                   @records, serializer: AlbumSerializer),
      #                 **pagy_metadata(@pagy)
      #                }
      # end

      def show
        job_listing = JobListing.find(params[:id])
        render json: job_listing
      end
    end
  end
end
